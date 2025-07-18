import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballData } from '../../../../services/football-data';
import { CompetitionData } from '../../../../models/competition-data';
import { Standing } from '../../../../models/standing';
import { Season } from '../../../../models/season';
import { CommonModule } from '@angular/common';
import { Table } from '../../../../models/table';

@Component({
  selector: 'app-competition',
  imports: [CommonModule],
  templateUrl: './competition.html',
  styleUrl: './competition.css',
})
export default class Competition implements OnInit {
  route = inject(ActivatedRoute);
  footballData = inject(FootballData);

  competition = signal<CompetitionData | null>(null);
  standings = signal<Standing[]>([]);
  season = signal<Season | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.footballData.getCompetitionById(+id).subscribe({
      next: (response) => {
        this.competition.set(response.competition);
        this.standings.set(response.standings);
        this.season.set(response.season);

        console.log()
      },
      error: (error) => {
        console.error('Error fetching competition:', error);
      },
    });
  }
}
