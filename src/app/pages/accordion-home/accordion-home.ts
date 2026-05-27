import { Component } from '@angular/core';
import { Accordion } from '../../components/accordion/accordion';
import { AccordionItem } from '../../components/models/accordion-item.model';

@Component({
  selector: 'app-accordion-home',
  imports: [Accordion],
  templateUrl: './accordion-home.html',
  styleUrl: './accordion-home.css',
})
export class AccordionHome {
  accordionData: AccordionItem[] = [

    {
      title: 'Angular',
      content: 'Angular is a frontend framework.',
      expanded: true
    },

    {
      title: 'Bootstrap',
      content: 'Bootstrap provides UI components.'
    },

    {
      title: 'Signals',
      content: 'Signals power Angular reactivity.'
    }

  ];
}
