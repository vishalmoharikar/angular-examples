import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionHome } from './accordion-home';

describe('AccordionHome', () => {
  let component: AccordionHome;
  let fixture: ComponentFixture<AccordionHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionHome],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
