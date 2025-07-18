import { Component, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { TeamData } from '../../../models/team-data';

@Component({
  selector: 'app-team-card',
  imports: [RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  private router = inject(Router);

  team = input.required<TeamData>();

  navigateToTeam(idTeam: number) {
    this.router.navigate(['/team', idTeam]);
  }
}
