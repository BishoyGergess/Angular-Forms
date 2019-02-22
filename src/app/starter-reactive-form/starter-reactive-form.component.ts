import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-starter-reactive-form',
  templateUrl: './starter-reactive-form.component.html',
  styleUrls: ['./starter-reactive-form.component.css']
})
export class StarterReactiveFormComponent implements OnInit {
  message:string;
  reactiveForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      'firstName':new FormControl(
        null,Validators.required
      )
    });
  }
  
  onSubmit(){
    this.message = 'You Typed ' + this.reactiveForm.value['firstName'];
  }

}
