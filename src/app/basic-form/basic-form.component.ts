import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormSharedService } from '../shared/formShared.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  submitted=this.formService.submitted;
  powers = [];
  form = this.formService.form;
  constructor(private formService:FormSharedService) { }

  ngOnInit() {
    this.powers = this.formService.powers;
  }
  onSubmit(f:NgForm){
    this.submitted = true;
    this.form = f;

  }


}
