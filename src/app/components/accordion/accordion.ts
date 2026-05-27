import { Component, input, Input } from '@angular/core';
import { AccordionItem } from '../models/accordion-item.model';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [NgTemplateOutlet],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  // @Input() items: AccordionItem[] = []; //Not a signal
  items = input.required<AccordionItem[]>(); //is a signal
}
