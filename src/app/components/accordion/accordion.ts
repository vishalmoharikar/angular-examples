import { Component, input, Input } from '@angular/core';
import { AccordionItem } from '../models/accordion-item.model';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  // @Input() items: AccordionItem[] = []; //Not a signal
  items = input.required<AccordionItem[]>(); //is a signal
}
