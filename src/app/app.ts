import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme } from './services/theme';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
})
export class App implements OnInit {
  themeService = inject(Theme);

  protected title = 'goal-sight';

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }
}
