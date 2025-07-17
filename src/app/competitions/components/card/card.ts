import { Component, input } from '@angular/core';
import { Competition } from '../../../models/competitions.response';

@Component({
  selector: 'app-competition-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  competition = input.required<Competition>();
}
