import {Component, ViewChild} from '@angular/core';
import {SummaryStepsRaw} from '../../../../core/models/SummaryStepsRaw';
import {DataService} from '../../../../core/services/data.service';
import {MatStepper} from '@angular/material';


@Component({
  selector: 'app-small-loan',
  templateUrl: './small-loan.component.html',
  styleUrls: ['./small-loan.component.scss'],
})
export class SmallLoanComponent {

  @ViewChild('stepper', {static: false}) stepper: MatStepper;
  isStep1Completed = false;
  isStep2Completed = false;
  isStep3Completed = false;
  isStep4Completed = false;


  constructor(private dataService: DataService) {
  }

  onStepOneClick(event: SummaryStepsRaw) {
    this.updateStep(event, 1);
  }

  onStepTwoClick(event: SummaryStepsRaw) {
    this.updateStep(event, 2);
  }

  onStepThreeClick(event: SummaryStepsRaw) {
    this.updateStep(event, 3);
  }

  onStepFourClick(event: SummaryStepsRaw) {
    this.updateStep(event, 4);
  }

  updateStep(event: SummaryStepsRaw, stepNumber: number) {

    const variable = 'isStep' + stepNumber + 'Completed';
    this[variable] = true;

    if (event) {
      this.dataService.UpdateSummary(event);
      this[variable] = true;
      setTimeout(() => {
        this.stepper.next();
      }, 10);
    } else {
      this[variable] = false;
    }
  }
}
