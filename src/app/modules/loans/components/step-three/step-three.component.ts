import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MessengerService} from '../../../../core/services/messenger.service';
import {ClientDataComponent} from '../client-data/client-data.component';
import {ClientAdditionalDataComponent} from '../client-additional-data/client-additional-data.component';
import {DataService} from '../../../../core/services/data.service';
import {SummaryStepsRaw} from '../../../../core/models/SummaryStepsRaw';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {

  @Output()
  nextClick: EventEmitter<SummaryStepsRaw> = new EventEmitter<SummaryStepsRaw>();

  @ViewChild('clientDataComponent', {static: false}) clientDataComponent: ClientDataComponent;
  @ViewChild('clientAdditionalDataComponent', {static: false}) clientAdditionalDataComponent: ClientAdditionalDataComponent;
  warningMsg = 'Pažymėti laukai neužpildyti arba su klaidom!!';

  constructor(private formBuilder: FormBuilder,
              private messenger: MessengerService,
              private dataService: DataService) {
  }

  ngOnInit() {
  }

  isFormValid(): boolean {
    return this.clientDataComponent.frmClientData.valid
      && this.clientAdditionalDataComponent.frmAdditionalClientData.valid;
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
    summary.name = this.clientDataComponent.frmClientData.controls.name.value;
    summary.surname = this.clientDataComponent.frmClientData.controls.surname.value;
    summary.id = this.clientDataComponent.frmClientData.controls.id.value;
    summary.education = this.clientAdditionalDataComponent.frmAdditionalClientData.controls.education.value;
    summary.jobPosition = this.clientAdditionalDataComponent.frmAdditionalClientData.controls.jobPosition.value;
    summary.jobField = this.clientAdditionalDataComponent.frmAdditionalClientData.controls.jobField.value;
    summary.jobPeriod = this.clientAdditionalDataComponent.frmAdditionalClientData.controls.jobPeriod.value;
    return summary;
  }
}
