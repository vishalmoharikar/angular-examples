import { Routes } from '@angular/router';
import { AccordionHome } from './pages/accordion-home/accordion-home';

export const routes: Routes = [
    {   path: '', redirectTo: 'accordion-home', pathMatch: 'full' },
    {   path: 'accordion-home', component: AccordionHome }
];
