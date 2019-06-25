import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessengerService} from '../../../../core/services/messenger.service';
import {IDropdownValues} from '../../../../core/models/dropdowns';
import {DataService} from '../../../../core/services/data.service';
import {SummaryStepsRaw} from '../../../../core/models/SummaryStepsRaw';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})


export class StepOneComponent implements OnInit {

  @Output()
  nextClick: EventEmitter<SummaryStepsRaw> = new EventEmitter<SummaryStepsRaw>();

  @Input()
  paydays: IDropdownValues[];

  frmStepOne: FormGroup;
  private defaultAmount = 500;
  private defaultLoanMonths = 6;
  warningMsg = 'Pažymėti laukai neužpildyti arba su klaidom!!';

  constructor(private formBuilder: FormBuilder,
              private messenger: MessengerService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.paydays = this.dataService.GetPayDays();
    this.frmStepOne = this.formBuilder.group({
      amount: this.defaultAmount,
      period: this.defaultLoanMonths,
      payday: ['', Validators.required],
    });
  }


  formatLabel(value: number | null) {
    if (!value) {
      return this.defaultAmount + '€';
    }

    if (value) {
      return value + '€';
    }

    return value;
  }

  formatLabelMonth(value: number | null) {
    if (!value) {
      return this.defaultLoanMonths + ' mėnesiai';
    }

    if (value) {
      return value + ' mėnesiai';
    }

    return value;
  }

  validateForm() {
    if (this.frmStepOne.invalid) {
      this.messenger.sendDangerMessage(this.warningMsg);
      this.nextClick.emit(null);
    } else {
      this.nextClick.emit(this.getSummary());
    }
  }

  getSummary(): SummaryStepsRaw {
    const summary = this.dataService.GetSummary();
    summary.amount = this.frmStepOne.controls.amount.value;
    summary.period = this.frmStepOne.controls.period.value;
    summary.payday = this.frmStepOne.controls.payday.value;
    return summary;
  }
}
