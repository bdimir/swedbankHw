import {NgModule} from '@angular/core';
import {MaterialModule} from '../../shared/modules/material-module';
import {LoansRouter} from './loans.router';
import {SmallLoanComponent} from './components/small-loan/small-loan.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StepOneComponent} from './components/step-one/step-one.component';
import {StepTwoComponent} from './components/step-two/step-two.component';
import {StepThreeComponent} from './components/step-three/step-three.component';
import {StepFourComponent} from './components/step-four/step-four.component';
import {StepSummaryComponent} from './components/step-summary/step-summary.component';
import {CommonModule} from '@angular/common';
import {ClientDataComponent} from './components/client-data/client-data.component';
import {ClientAdditionalDataComponent} from './components/client-additional-data/client-additional-data.component';

@NgModule({
  declarations: [
    SmallLoanComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepSummaryComponent,
    ClientDataComponent,
    ClientAdditionalDataComponent],
  imports: [
    LoansRouter,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
})

export class LoansModule {
}
