import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessengerService} from '../../../../core/services/messenger.service';
import {DataService} from '../../../../core/services/data.service';
import {SummaryStepsRaw} from '../../../../core/models/SummaryStepsRaw';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {

  @Output()
  nextClick: EventEmitter<SummaryStepsRaw> = new EventEmitter<SummaryStepsRaw>();

  frmStepFour: FormGroup;
  warningMsg = 'Tel. numberis suvestas neteisingai, numerį turi sudaryti 11 skaičių, pvz +370 123 45678';

  constructor(private formBuilder: FormBuilder,
              private messenger: MessengerService,
              private dataService: DataService) {

  }

  ngOnInit() {
    this.frmStepFour = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      info: ['']
    });
  }

  isFormValid(): boolean {
    if ((this.frmStepFour.controls.phone.value + '').length !== 8) {
      this.frmStepFour.controls.phone.setErrors({required: true});
      return false;
    }
    return true;
  }

  validateForm() {
    if (!this.isFormValid()) {
      this.messenger.sendDangerMessage(this.warningMsg);
      this.nextClick.emit(null);
    } else {
      this.nextClick.emit(this.getSummary());
    }

  }

  getSummary(): SummaryStepsRaw {
    const summary = this.dataService.GetSummary();
    summary.phone = this.frmStepFour.controls.phone.value;
    summary.info = this.frmStepFour.controls.info.value;
    return summary;
  }
}
