import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballData } from '../../../services/football-data';
import { CompetitionData } from '../../../models/competition-data';
import { Standing } from '../../../models/standing';
import { Season } from '../../../models/season';
import { CommonModule } from '@angular/common';
import { Match } from '../../../models/responses/competition-matches.response';
import { Table } from '../../components/table/table';
import { Matches } from '../../components/matches/matches';
import { StageMatchdayPair } from '../../../models/types/stage-matchday.type';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-competition',
  imports: [CommonModule, Table, Matches],
  templateUrl: './competition.html',
  styleUrl: './competition.css',
})
export default class Competition implements OnInit {
  route = inject(ActivatedRoute);
  footballData = inject(FootballData);

  competition = signal<CompetitionData | null>(null);
  standings = signal<Standing[]>([]);
  season = signal<Season | null>(null);
  matches = signal<Match[]>([]);
  stageMatchdayPairs = signal<Set<StageMatchdayPair>>(new Set());
  currentIndex = signal<number>(0);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    forkJoin({
      competitionData: this.footballData.getCompetitionById(+id),
      matchesData: this.footballData.getAllCompetitionMatches(+id),
    }).subscribe({
      next: ({ competitionData, matchesData }) => {
        this.competition.set(competitionData.competition);
        this.standings.set(competitionData.standings);
        this.season.set(competitionData.season);

        this.processMatches(matchesData.matches);

        this.findCurrentStageIndex();
      },
      error: (error) => {
        console.error('Error fetching competition:', error);
      },
    });
  }

  private processMatches(matches: Match[]): void {
    type StageKey = `${string}-${number}`;
    const stageMap = new Map<StageKey, StageMatchdayPair>();
    const stageOrder: string[] = [];

    for (const match of matches) {
      const key: StageKey = `${match.stage}-${match.matchday}`;

      if (!stageMap.has(key)) {
        stageMap.set(key, {
          stage: match.stage,
          matchday: match.matchday,
          startDate: new Date(match.utcDate),
          endDate: new Date(match.utcDate),
        });

        if (!stageOrder.includes(match.stage)) {
          stageOrder.push(match.stage);
        }
      } else {
        const existing = stageMap.get(key)!;
        const matchDate = new Date(match.utcDate);
        existing.startDate =
          matchDate < existing.startDate ? matchDate : existing.startDate;
        existing.endDate =
          matchDate > existing.endDate ? matchDate : existing.endDate;
      }
    }

    const orderedPairs = new Set<StageMatchdayPair>();
    for (const stage of stageOrder) {
      const filtered = Array.from(stageMap.values())
        .filter((pair) => pair.stage === stage)
        .sort((a, b) => a.matchday - b.matchday);

      for (const pair of filtered) {
        orderedPairs.add(pair);
      }
    }

    this.stageMatchdayPairs.set(orderedPairs);
    this.matches.set(matches);
  }

  private findCurrentStageIndex(): void {
    const stagesArray = Array.from(this.stageMatchdayPairs());
    const now = new Date();

    for (const [index, stage] of stagesArray.entries()) {
      if (now >= stage.startDate && stage.endDate < now) continue;
      this.currentIndex.set(index);
      break;
    }
  }
}
