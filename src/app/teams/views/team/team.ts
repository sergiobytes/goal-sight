import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballData } from '../../../services/football-data';
import { TeamData } from '../../../models/team-data';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export default class Team implements OnInit {
  route = inject(ActivatedRoute);
  footballData = inject(FootballData);

  teamData = signal<TeamData | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.footballData.getTeamById(+id).subscribe({
      next: (response) => {
        this.teamData.set(response);
      },
      error: (error) => {
        console.error('Error fetching team data:', error);
      },
    });
  }
}
