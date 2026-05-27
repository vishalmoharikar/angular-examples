import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHome } from './grid-home';

describe('GridHome', () => {
  let component: GridHome;
  let fixture: ComponentFixture<GridHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridHome],
    }).compileComponents();

    fixture = TestBed.createComponent(GridHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
