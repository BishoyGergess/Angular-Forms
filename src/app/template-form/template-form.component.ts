import { Component, OnInit } from '@angular/core';
import { FormModel } from '../shared/Form.model';
import { ShowErrorComponent } from '../shared/showError.component';
import { FormSharedService } from '../shared/formShared.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
    form:FormModel;
    submitted:boolean = this.formService.submitted ;
    powers = [];
  constructor(private formService:FormSharedService) { }

  ngOnInit() {
    this.form = this.formService.defultValue;
    this.powers = this.formService.powers;
  }
  onSubmit(){
    this.formService.submitted = true;
  }

}
