import { Component, input } from '@angular/core';
import { Match } from '../../../models/responses/competition-matches.response';
import { CommonModule } from '@angular/common';
import { Status } from '../../../models/score';

@Component({
  selector: 'app-match-card',
  imports: [CommonModule],
  templateUrl: './match-card.html',
  styleUrl: './match-card.css',
})
export class MatchCard {
  match = input.required<Match>();

  showScore(status: Status): string {
    switch (status) {
      case Status.Timed:
      case Status.Postponed:
        return '0 - 0';
      case Status.Live:
        return `${this.match().score.halfTime.home} - ${
          this.match().score.halfTime.away
        }`;
      case Status.Finished:
        return `${this.match().score.fullTime.home} - ${
          this.match().score.fullTime.away
        }`;
      default:
        return '';
    }
  }

  getStatusColor(status: Status): string {
    switch (status) {
      case Status.Scheduled:
        return 'bg-gray-400';
      case Status.Live:
      case Status.InPlay:
        return 'bg-green-500';
      case Status.Paused:
        return 'bg-yellow-400';
      case Status.Finished:
        return 'bg-blue-500';
      case Status.Postponed:
        return 'bg-orange-500';
      case Status.Suspended:
        return 'bg-red-500';
      case Status.Cancelled:
        return 'bg-black';
      default:
        return 'bg-gray-300';
    }
  }
}
