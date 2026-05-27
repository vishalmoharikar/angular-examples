import { Component, OnInit, TemplateRef, viewChild } from '@angular/core';
import { Accordion } from '../../components/accordion/accordion';
import { AccordionItem } from '../../components/models/accordion-item.model';

@Component({
  selector: 'app-accordion-home',
  imports: [Accordion],
  templateUrl: './accordion-home.html',
  styleUrl: './accordion-home.css',
})
export class AccordionHome implements OnInit {
  angularTemplate = viewChild<TemplateRef<unknown>>('template1');

  bootstrapTemplate = viewChild<TemplateRef<unknown>>('template2');

  accordionData: AccordionItem[] = [];

  ngOnInit() {

    this.accordionData = [

      {
        title: 'Angular',
        template: this.angularTemplate(),
        expanded: true
      },

      {
        title: 'Bootstrap',
        template: this.bootstrapTemplate()
      },

      {
        title: 'Simple Text',
        content: 'Normal string content'
      }

    ];

  }
}
