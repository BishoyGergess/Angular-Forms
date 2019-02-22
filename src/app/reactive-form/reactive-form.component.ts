import { Component, OnInit } from '@angular/core';
import { FormSharedService } from '../shared/formShared.service';
import { FormModel } from '../shared/Form.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from '../shared/validatorService.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formGroup = this.formService.formGroup;
  submitted = this.formService.submitted;
  powers = [];
  form:FormModel;
  formValue:FormModel;
  


  constructor(private formService:FormSharedService) { }

  ngOnInit() {
    this.powers = this.formService.powers;
    this.form = this.formService.defultValue;
    this.formGroup = new FormGroup({
      'name': new FormControl(
        this.form.name , [Validators.required]
      ),
      'alterEgo': new FormControl(
        this.form.alterEgo , [Validators.required]
      ),
      'email':new FormControl(
        this.form.email ,[Validators.required,ValidationService.emailValidator]
      ),
      'power':new FormControl(
        this.form.power , [Validators.required]
      )
    })
    
  }
  onSubmit({value,valid}:{value:FormModel , valid:boolean}){
    this.submitted = true;
    this.formValue = value;
  }

}
