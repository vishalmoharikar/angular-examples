import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionHome } from './pages/accordion-home/accordion-home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccordionHome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examples');
}
