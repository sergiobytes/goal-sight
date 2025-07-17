import { Component, inject, input } from '@angular/core';
import { CompetitionData } from '../../../models/competitions.response';
import { Router, RouterModule } from '@angular/router';

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
