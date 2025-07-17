import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private themeKey = 'theme-preference';

  initializeTheme() {
    const savedTheme = localStorage.getItem(this.themeKey);

    if (savedTheme === 'dark') this.setDark();
    else if (savedTheme === 'light') this.setLight();
    else this.setSystemTheme();
  }

  toggleTheme(): void {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');

    if (isDark) this.setLight();
    else this.setDark();
  }

  private setDark(): void {
    document.documentElement.classList.add('dark');
    localStorage.setItem(this.themeKey, 'dark');
  }

  private setLight(): void {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(this.themeKey, 'light');
  }

  private setSystemTheme(): void {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    prefersDark ? this.setDark() : this.setLight();
  }
}
