import { Component, OnInit } from '@angular/core';
import { FormModel } from '../shared/Form.model';
import { FormSharedService } from '../shared/formShared.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from '../shared/validatorService.service'


@Component({
  selector: 'app-update-on',
  templateUrl: './update-on.component.html',
  styleUrls: ['./update-on.component.css']
})
export class UpdateOnComponent implements OnInit {
  formModel:FormModel;
  formModelSubmitted:FormModel;
  powers = [];
  templateSubmitted:boolean = false;
  reactiveSubmitted:boolean = false;
  formGroup:FormGroup;

  constructor(private formServices:FormSharedService ) { }

  ngOnInit() {
    this.formModel = new FormModel(9 , 'Dr IQ','fly','Really Smart','pop@pop.com')
    this.powers = this.formServices.powers;
    this.formGroup = new FormGroup({
      'name':new FormControl(this.formModel.name,[Validators.required,Validators.minLength(2)]),
      'alterEgo':new FormControl(this.formModel.alterEgo , [Validators.required]),
      'power':new FormControl(this.formModel.power, [Validators.required]),
      'email':new FormControl(this.formModel.email, { validators: [Validators.required,ValidationService.emailValidator] })
    },{updateOn:'blur'})
  }

  onSubmit(){
    this.templateSubmitted = true;


  }
  updateOnForAll(){
    this.formGroup.setValue({updateOn:'blur'})
  }
  onReactiveSubmit(){
    this.reactiveSubmitted =true;
    this.formModelSubmitted = this.formGroup.value;
  }

}
