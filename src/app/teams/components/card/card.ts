import { Component, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Team } from '../../../models/team';

@Component({
  selector: 'app-team-card',
  imports: [RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  private router = inject(Router);

  team = input.required<Team>();

  navigateToTeam(idTeam: number) {
    this.router.navigate(['/team', idTeam]);
  }
}
