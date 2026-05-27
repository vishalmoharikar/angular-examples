import { Routes } from '@angular/router';
import { AccordionHome } from './pages/accordion-home/accordion-home';
import { GridHome } from './pages/grid-home/grid-home';

export const routes: Routes = [
    { path: '', redirectTo: 'accordion-home', pathMatch: 'full' },
    { path: 'accordion-home', component: AccordionHome },
    { path: 'grid-home', component: GridHome }

];
