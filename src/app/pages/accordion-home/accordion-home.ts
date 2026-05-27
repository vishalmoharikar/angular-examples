import { AfterViewInit, Component, OnInit, signal, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { Accordion } from '../../components/accordion/accordion';
import { AccordionItem } from '../../components/models/accordion-item.model';

@Component({
  selector: 'app-accordion-home',
  imports: [Accordion],
  templateUrl: './accordion-home.html',
  styleUrl: './accordion-home.css',
})
export class AccordionHome implements OnInit, AfterViewInit {

  /* Signal-based query API (Angular 17+).
   Accessed as template1().
   In this example it is already resolved in ngOnInit because the queried
   template exists immediately in the component view.*/

  template1 = viewChild<TemplateRef<unknown>>('template1');

  /*This query is NOT guaranteed during ngOnInit (default: static = false).
    Safe access point is ngAfterViewInit and not ngOnInit.*/
  // @ViewChild('template1') template1!: TemplateRef<any>; //normal viewChild. it will work ONLY in ngAfterViewInit.



  template2 = viewChild<TemplateRef<unknown>>('template2');


  // accordionData: AccordionItem[] = [];
  accordionData = signal<AccordionItem[]>([]);
  ngOnInit() {

    console.log('ngOnInit', this.template1());

    this.accordionData.set([

      {
        title: 'Angular',
        template: this.template1(),
        expanded: true
      },

      {
        title: 'Bootstrap',
        template: this.template2()
      },

      {
        title: 'Simple Text',
        content: 'Normal string content'
      }


    ]);



  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.template1);
    //
    /*     this.accordionData.set([
    
          {
            title: 'Angular',
            template: this.template1,
            expanded: true
          },
    
          {
            title: 'Bootstrap',
            template: this.template2()
          },
    
          {
            title: 'Simple Text',
            content: 'Normal string content'
          }
    
    
        ]);
     */
  }
}
