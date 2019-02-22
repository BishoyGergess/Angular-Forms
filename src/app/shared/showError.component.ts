import { Component, Input } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { ValidationService } from './validatorService.service';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
    selector:'show-error',
    inputs:['controlPath: control','errorTypes: errors'],
    template:`<div class="alert alert-danger" *ngIf="errorMessage!==null">{{ errorMessage }}</div>`
})
export class ShowErrorComponent{
    //errorMessage:string;
    @Input() control: FormControl;
    constructor() { }

  get errorMessage():string {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
       const controlError = this.control.errors[propertyName];
        return ValidationService.getValidatorErrorMessage(propertyName || controlError);
      }
    }
    
    return null;
  }
}