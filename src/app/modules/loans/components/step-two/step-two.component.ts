import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessengerService} from '../../../../core/services/messenger.service';
import {DataService} from '../../../../core/services/data.service';
import {SummaryStepsRaw} from '../../../../core/models/SummaryStepsRaw';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StepTwoComponent implements OnInit {

  @Output()
  nextClick: EventEmitter<SummaryStepsRaw> = new EventEmitter<SummaryStepsRaw>();

  frmStepTwo: FormGroup;
  warningMsg = 'Pažymėti laukai neužpildyti arba su klaidom!!';

  constructor(private formBuilder: FormBuilder,
              private messenger: MessengerService,
              private dataService: DataService) {

  }

  ngOnInit() {
    this.frmStepTwo = this.formBuilder.group({
      salary: ['', [Validators.required, Validators.min(0)]]
    });

  }

  validateForm() {
    if (this.frmStepTwo.invalid) {
      this.messenger.sendDangerMessage(this.warningMsg);
      this.nextClick.emit(null);
    } else {
      this.nextClick.emit(this.getSummary());
    }
  }

  getSummary(): SummaryStepsRaw {
    const summary = this.dataService.GetSummary();
    summary.salary = this.frmStepTwo.controls.salary.value;
    return summary;
  }
}
