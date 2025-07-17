import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme } from './services/theme';
import { Navbar } from './shared/components/navbar/navbar';
import { FootballData } from './services/football-data';
import { Competition } from './models/competitions.response';

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
})
export class App implements OnInit {
  themeService = inject(Theme);
  footballData = inject(FootballData);

  protected title = 'goal-sight';

  competitions = signal<Competition[]>([]);

  ngOnInit(): void {
    this.themeService.initializeTheme();
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
