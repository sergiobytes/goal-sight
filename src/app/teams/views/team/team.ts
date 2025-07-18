import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FootballData } from '../../../services/football-data';

import { TeamResponse } from '../../../models/responses/team.response';

@Component({
  selector: 'app-team',
  imports: [CommonModule, RouterModule],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export default class Team implements OnInit {
  route = inject(ActivatedRoute);
  footballData = inject(FootballData);

  teamData = signal<TeamResponse | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.footballData.getTeamById(+id).subscribe({
      next: (response) => {
        this.teamData.set(response);
        console.log('Team data fetched successfully:', response);
      },
      error: (error) => {
        console.error('Error fetching team data:', error);
      },
    });
  }
}
