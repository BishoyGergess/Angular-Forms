import { Component, OnInit } from '@angular/core';
import { FormSharedService } from '../shared/formShared.service';
import { ValidationService } from '../shared/validatorService.service';
import { FormModel } from '../shared/Form.model';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-dynamic-form',
  templateUrl: './reactive-dynamic-form.component.html',
  styleUrls: ['./reactive-dynamic-form.component.css']
})
export class ReactiveDynamicFormComponent implements OnInit {
  submitted = this.formService.submitted;
  powers = [];
  form:FormModel;
  formGroup = this.formService.formGroup;
  formModelProps = [];
  constructor(private formService:FormSharedService) { }

  ngOnInit() {
    this.powers = this.formService.powers;
    this.form = this.formService.defultValue;
    const FormModel = {};
    let validators = [Validators.required];
    for(const prop of Object.keys(this.form)){
      if(prop.indexOf('email') !== -1){
        validators.push(ValidationService.emailValidator);
        FormModel[prop] = new FormControl(this.form, validators);
        this.formModelProps.push(prop);
      }
    }
    this.formGroup = new FormGroup(FormModel);
  }
  onSubmit(){
    this.submitted = true;
  }
}
