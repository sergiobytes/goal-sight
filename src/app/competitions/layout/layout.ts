import { Component, inject, OnInit, signal } from '@angular/core';
import { FootballData } from '../../services/football-data';
import { CompetitionData } from '../../models/competition-data';
import { Card } from '../components/card/card';

@Component({
  selector: 'app-layout',
  imports: [Card],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export default class Layout implements OnInit {
  footballData = inject(FootballData);

  competitions = signal<CompetitionData[]>([]);

  ngOnInit(): void {
    this.fillCompetitions();
  }

  fillCompetitions(): void {
    this.footballData.getCompetitions().subscribe({
      next: (response) => {
        this.competitions.set(response.competitions);
      },
      error: (error) => {
        console.error('Error fetching competitions:', error);
      },
    });
  }
}
