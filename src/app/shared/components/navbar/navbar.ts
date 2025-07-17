import { Component, inject } from '@angular/core';
import { Theme } from '../../../services/theme';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  themeService = inject(Theme);
}
