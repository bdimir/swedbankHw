import {Injectable} from '@angular/core';
import {IDropdownValues} from '../models/dropdowns';
import {SummaryStepsInfo, SummaryStepsRaw} from '../models/SummaryStepsRaw';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class DataService {

  public summaryChange: Subject<SummaryStepsInfo> = new Subject<SummaryStepsInfo>();

  private summary: SummaryStepsRaw = {
    amount: 0,
    period: 0,
    payday: 0,
    salary: 0,
    name: '',
    surname: '',
    id: '',
    education: 0,
    jobPosition: 0,
    jobField: 0,
    jobPeriod: 0,
    phone: 0,
    info: '',
  };

  GetPayDays(): IDropdownValues[] {
    return [
      {value: 3, viewValue: '3'},
      {value: 7, viewValue: '7'},
      {value: 12, viewValue: '12'},
      {value: 17, viewValue: '17'},
      {value: 27, viewValue: '27'}
    ];
  }

  GetEducations(): IDropdownValues[] {
    return [
      {value: 1, viewValue: 'Pradinis'},
      {value: 2, viewValue: 'Vidurinis'},
      {value: 3, viewValue: 'Spec. vidurinis'},
      {value: 4, viewValue: 'Aukštesnysis'},
      {value: 5, viewValue: 'Aukštasis'}
    ];
  }

  GetJobPositions(): IDropdownValues[] {
    return [
      {value: 1, viewValue: 'Darbininkas'},
      {value: 2, viewValue: 'Specialistas, tarnautojas'},
      {value: 3, viewValue: 'Vyr. specialistas'},
      {value: 4, viewValue: 'Vadovas (skyriaus, padalinio)'},
      {value: 5, viewValue: 'Įmonės vadovas'},
      {value: 6, viewValue: 'Savininkas'},
      {value: 7, viewValue: 'Studentas'},
      {value: 8, viewValue: 'Pensininkas'},
      {value: 9, viewValue: 'Namų šemininkė'},
      {value: 10, viewValue: 'Niekur nedirbu'},
      {value: 11, viewValue: 'Individuali veikla'}
    ];
  }

  GetJobFields(): IDropdownValues[] {
    return [
      {value: 1, viewValue: 'Žemės ūkis, miškininkystė, medžioklė, žuvininkystė'},
      {value: 2, viewValue: 'Statyba, apdirbamoji pramonė'},
      {value: 3, viewValue: 'Pramonė'},
      {value: 4, viewValue: 'Prekyba, aptarnavimas'},
      {value: 5, viewValue: 'Transportas, pervežimas, ryšiai'},
      {value: 6, viewValue: 'Finansinis tarpininkavimas'},
      {value: 7, viewValue: 'Švietimas, kultūra'},
      {value: 8, viewValue: 'Nekilnojamasis turtas, nuoma'},
      {value: 9, viewValue: 'Informacinės technologijos'},
      {value: 10, viewValue: 'Teisinis tarpininkavimas, auditas ir kita veikla'},
      {value: 11, viewValue: 'Sveikatos apsauga ir socialinis darbas'},
      {value: 12, viewValue: 'Valstybės valdymas ir gynimas'}
    ];
  }

  GetJobPeriods(): IDropdownValues[] {
    return [
      {value: 1, viewValue: 'Bandomasis laikotarpis'},
      {value: 2, viewValue: 'Iki 1 metų'},
      {value: 3, viewValue: 'Iki 2 metų'},
      {value: 4, viewValue: 'Iki 3 metų'},
      {value: 5, viewValue: 'Iki 4 metų'},
      {value: 6, viewValue: 'Iki 5 metų'},
      {value: 7, viewValue: 'Virš 5 metų'}
    ];
  }

  GetSummary(): SummaryStepsRaw {
    return Object.assign({}, this.summary);
  }

  GetSummarySubscription(): Observable<SummaryStepsInfo> {
    return this.summaryChange.asObservable();
  }

  UpdateSummary(summary: SummaryStepsRaw) {
    this.summary = summary;
    this.UpdateAdditionalInfo(summary);
  }

  private UpdateAdditionalInfo(summary: SummaryStepsRaw) {
    const summaryInfo: SummaryStepsInfo = {
      amount: summary.amount,
      period: summary.period,
      payday: summary.payday,
      salary: summary.salary,
      name: summary.name,
      surname: summary.surname,
      id: summary.id,
      education: summary.education !== 0 ? this.GetEducations().filter(e => e.value === summary.education)[0].viewValue : '',
      jobPosition: summary.jobPosition !== 0 ? this.GetJobPositions().filter(e => e.value === summary.jobPosition)[0].viewValue : '',
      jobField: summary.jobField !== 0 ? this.GetJobFields().filter(e => e.value === summary.jobField)[0].viewValue : '',
      jobPeriod: summary.jobPeriod !== 0 ? this.GetJobPeriods().filter(e => e.value === summary.jobPeriod)[0].viewValue : '',
      phone: summary.phone,
      info: summary.info,
    };
    this.summaryChange.next(summaryInfo);
  }
}
