import { Component, input } from '@angular/core';
import { Match } from '../../../models/responses/competition-matches.response';
import { CommonModule } from '@angular/common';
import { MatchCard } from '../match-card/match-card';
import { StageMatchdayPair } from '../../../models/types/stage-matchday.type';

@Component({
  selector: 'app-competition-matches',
  imports: [CommonModule, MatchCard],
  templateUrl: './matches.html',
  styleUrl: './matches.css',
})
export class Matches {
  currentMatchday = input.required<number>();
  matches = input.required<Match[]>();
  stages = input.required<Set<StageMatchdayPair>>();

  
}
