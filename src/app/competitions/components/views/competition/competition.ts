import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballData } from '../../../../services/football-data';
import { CompetitionData } from '../../../../models/competition-data';

@Component({
  selector: 'app-competition',
  imports: [],
  templateUrl: './competition.html',
  styleUrl: './competition.css',
})
export default class Competition implements OnInit {
  route = inject(ActivatedRoute);
  footballData = inject(FootballData);

  competition = signal<CompetitionData | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.footballData.getCompetitionById(+id).subscribe({
      next: (response) => {
        this.competition.set(response);
      },
      error: (error) => {
        console.error('Error fetching competition:', error);
      },
    });
  }
}
