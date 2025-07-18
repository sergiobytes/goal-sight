import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballData } from '../../../../services/football-data';
import { CompetitionData } from '../../../../models/competition-data';
import { Standing } from '../../../../models/standing';
import { Season } from '../../../../models/season';
import { CommonModule } from '@angular/common';
import { Match } from '../../../../models/responses/competition-matches.response';
import { Stage } from '../../../../models/score';
import { Table } from '../../table/table';
import { Matches } from '../../matches/matches';

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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.footballData.getCompetitionById(+id).subscribe({
      next: (response) => {
        this.competition.set(response.competition);
        this.standings.set(response.standings);
        this.season.set(response.season);

        this.loadMatches(this.season()?.currentMatchday);
      },
      error: (error) => {
        console.error('Error fetching competition:', error);
      },
    });
  }

  loadMatches(matchday: number = 0, stage: string = ''): void {
    this.footballData
      .getCompetitionMatchesByMatchDay(this.competition()!.id, matchday)
      .subscribe({
        next: (response) => {
          this.matches.set(response.matches);
          console.log(this.matches());
        },
        error: (error) => {
          console.error('Error fetching matches:', error);
        },
      });
  }
}
