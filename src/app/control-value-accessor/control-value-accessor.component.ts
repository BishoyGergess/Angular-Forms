import { Component, OnInit } from '@angular/core';
import { FormSharedService } from '../shared/formShared.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.css']
})
export class ControlValueAccessorComponent implements OnInit {
  formGroup = this.formGroup.formGroup;
  customer:any;
  message:string;
  constructor(private formService:FormSharedService) { }

  ngOnInit() {
    this.customer = {
      firstName:'Tina Ned',
      phone:'123-123-123'
    };
    this.formGroup = new FormGroup({
      'firstName':new FormControl(this.customer.firstName),
      'phone':new FormControl(this.customer.phone)
    });
  }
  onSubmit(){
    this.message = 'You Entered ' + this.formGroup.controls.firstName + ' ' +this.formGroup.controls.phone;
  }

}
