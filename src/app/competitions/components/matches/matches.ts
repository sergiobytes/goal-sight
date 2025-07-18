import { Component, computed, effect, input, signal } from '@angular/core';
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
  currentIndex = input.required<number>();
  matches = input.required<Match[]>();
  stages = input.required<Set<StageMatchdayPair>>();

  selectedIndex = signal<number>(-1);

  filteredStage = computed(() => {
    const stageList = [...this.stages()];
    if (
      stageList.length === 0 ||
      this.selectedIndex() < 0 ||
      this.selectedIndex() >= stageList.length
    ) {
      return null;
    }

    return stageList[this.selectedIndex()];
  });

  constructor() {
    effect(() => {
      const stagesArray = [...this.stages()];
      if (stagesArray.length === 0) return;

      const index = this.currentIndex();
      if (index >= 0 && index < stagesArray.length) {
        this.selectedIndex.set(index);
      }
    });
  }

  previousStage(): void {
    if (this.selectedIndex() > 0) this.selectedIndex.update((i) => i - 1);
  }

  nextStage(): void {
    if (this.selectedIndex() <= this.stages().size - 1) {
      this.selectedIndex.update((i) => i + 1);
    }
  }

  filterMatches() {
    const stagesArray = [...this.stages()];

    const selectedStage = stagesArray[this.selectedIndex()];

    const filteredMatches = this.matches().filter(
      (m) =>
        m.stage === selectedStage.stage && m.matchday === selectedStage.matchday
    );

    return filteredMatches;
  }
}
