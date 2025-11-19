import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WowClassesComponent } from './presentation/wow-classes/wow-classes';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WowClassesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
