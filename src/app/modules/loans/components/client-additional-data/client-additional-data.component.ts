import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IDropdownValues} from '../../../../core/models/dropdowns';
import {DataService} from '../../../../core/services/data.service';

@Component({
  selector: 'app-client-additional-data',
  templateUrl: './client-additional-data.component.html',
  styleUrls: ['./client-additional-data.component.scss']
})
export class ClientAdditionalDataComponent implements OnInit {

  frmAdditionalClientData: FormGroup;
  educations: IDropdownValues[];
  jobPositions: IDropdownValues[];
  jobFields: IDropdownValues[];
  jobPeriods: IDropdownValues[];

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {

  }

  ngOnInit() {
    this.educations = this.dataService.GetEducations();
    this.jobPositions = this.dataService.GetJobPositions();
    this.jobFields = this.dataService.GetJobFields();
    this.jobPeriods = this.dataService.GetJobPeriods();
    this.frmAdditionalClientData = this.formBuilder.group({
      education: ['', Validators.required],
      jobPosition: ['', Validators.required],
      jobField: ['', Validators.required],
      jobPeriod: ['', Validators.required]
    });
  }

}
