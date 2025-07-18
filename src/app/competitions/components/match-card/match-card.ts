import { Component, input } from '@angular/core';
import { Match } from '../../../models/responses/competition-matches.response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-card',
  imports: [CommonModule],
  templateUrl: './match-card.html',
  styleUrl: './match-card.css',
})
export class MatchCard {
  match = input.required<Match>();
}
