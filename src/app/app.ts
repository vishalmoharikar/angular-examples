import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AccordionHome } from './pages/accordion-home/accordion-home';
import { GridHome } from './pages/grid-home/grid-home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examples');
}
