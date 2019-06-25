import {Component, OnInit} from '@angular/core';
import {SummaryStepsInfo} from '../../../../core/models/SummaryStepsRaw';
import {DataService} from '../../../../core/services/data.service';
import {Observable} from 'rxjs';
import {MessengerService} from '../../../../core/services/messenger.service';

@Component({
  selector: 'app-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})
export class StepSummaryComponent implements OnInit {

  stepsSummary: Observable<SummaryStepsInfo>;


  constructor(private dataService: DataService, private messenger: MessengerService) {
  }

  ngOnInit() {
    this.stepsSummary = this.loadSummary();
  }

  loadSummary(): Observable<SummaryStepsInfo> {
    return this.dataService.GetSummarySubscription();
  }

  finish() {
    this.messenger.sendSuccessMessage('Pabaiga, ačiū už dėmesį');
  }
}
