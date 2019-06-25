import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.scss']
})
export class ClientDataComponent implements OnInit {

  frmClientData: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.frmClientData = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      id: ['', Validators.required]
    });
  }

}
