import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found.component.ts/page-not-found.component';
import {HomeComponent} from './home/home.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'loans',
    loadChildren: () => import('../modules/loans/loans.module').then(mod => mod.LoansModule),
  },
  {path: '**', component: PageNotFoundComponent}
];
