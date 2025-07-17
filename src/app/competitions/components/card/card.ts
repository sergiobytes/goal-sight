import { Component, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CompetitionData } from '../../../models/competition-data';

@Component({
  selector: 'app-competition-card',
  imports: [RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  private router = inject(Router);

  competition = input.required<CompetitionData>();

  navigateToCompetition(idCompetition: number) {
    this.router.navigate(['/competition', idCompetition]);
  }
}
