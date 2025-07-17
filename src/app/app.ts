import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme } from './services/theme';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
})
export class App implements OnInit {
  themeService = inject(Theme);

  protected title = 'goal-sight';

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }
}
