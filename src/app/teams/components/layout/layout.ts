import { Component, inject, OnInit, signal } from '@angular/core';
import { FootballData } from '../../../services/football-data';
import { Team } from '../../../models/team';
import { Card } from '../../card/card';

@Component({
  selector: 'app-layout',
  imports: [Card],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export default class Layout implements OnInit {
  footballData = inject(FootballData);

  teams = signal<Team[]>([]);

  currentPage = signal<number>(0);

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.footballData.getTeams(12, this.currentPage()).subscribe({
      next: (response) => {
        this.teams.set(response.teams);
      },
      error: (error) => {
        console.error('Error fetching teams:', error);
      },
    });
  }

  prevTeams() {
    if (this.currentPage() > 0) {
      this.currentPage.set(this.currentPage() - 1);
    }

    this.getTeams();
  }

  nextTeams() {
    this.currentPage.set(this.currentPage() + 1);

    this.getTeams();
  }
}
