import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('frontend');

  constructor(private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.initTooltips();
      }
    });
  }

  ngAfterViewInit() {

    this.initTooltips();
  }

  private initTooltips() {
    setTimeout(() => {
      const wowdbTooltip = (window as any).wowdbTooltip;
      if (wowdbTooltip && typeof wowdbTooltip.init === 'function') {
        wowdbTooltip.init();
      }
    }, 100);
  }
}