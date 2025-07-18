import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballData } from '../../../../services/football-data';
import { CompetitionData } from '../../../../models/competition-data';
import { Standing } from '../../../../models/standing';
import { Season } from '../../../../models/season';
import { CommonModule } from '@angular/common';
import { Match } from '../../../../models/responses/competition-matches.response';
import { Table } from '../../table/table';
import { Matches } from '../../matches/matches';
import { StageMatchdayPair } from '../../../../models/types/stage-matchday.type';

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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.footballData.getCompetitionById(+id).subscribe({
      next: (response) => {
        this.competition.set(response.competition);
        this.standings.set(response.standings);
        this.season.set(response.season);

        this.loadStages();
      },
      error: (error) => {
        console.error('Error fetching competition:', error);
      },
    });
  }

  loadStages(): void {
    this.footballData
      .getAllCompetitionMatches(this.competition()!.id)
      .subscribe({
        next: (response) => {
          const values = new Set<string>();

          response.matches.forEach((match) => {
            values.add(`${match.stage}-${match.matchday}`);
          });

          const stageMatchdayPairs = new Set<StageMatchdayPair>();

          values.forEach((key) => {
            const [stage, matchday] = key.split('-');
            stageMatchdayPairs.add({ stage, matchday: Number(matchday) });
          });

          this.stageMatchdayPairs.set(stageMatchdayPairs);

          this.matches.set(response.matches);
        },
        error: (error) => {
          console.error('Error fetching matches:', error);
        },
      });
  }
}
