import {RouterModule, Routes} from '@angular/router';
import {SmallLoanComponent} from './components/small-loan/small-loan.component';

const LOANS_ROUTER: Routes = [
  {path: '', redirectTo: 'small_loan', pathMatch: 'full'},
  {
    path: '',
    children: [
      {
        path: 'small_loan',
        component: SmallLoanComponent
      }
    ]
  }
];
export const LoansRouter = RouterModule.forChild(LOANS_ROUTER);
