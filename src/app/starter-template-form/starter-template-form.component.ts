import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-starter-template-form',
  templateUrl: './starter-template-form.component.html',
  styleUrls: ['./starter-template-form.component.css']
})
export class StarterTemplateFormComponent implements OnInit {
  customer:any;
  message:string;
  constructor() { }

  ngOnInit() {
    this.customer = {
      firstName:'Someone Template'
    };
  }
  onSubmit(form:NgForm){
    this.message = 'You typed: '+ this.customer.firstName;
  }

}
