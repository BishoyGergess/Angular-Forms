import {  forwardRef, Component } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
    selector:'phone-textbox',
    template:`<input type="text" class="form-control" [value]="value" 
           (input)="onChange($event.target.value)" 
           (blur)="onTouched($event)" [disabled]="disabled" />`,
    styleUrls:['./control-value-accessor.component.css'],
    providers:[
        {provide: NG_VALUE_ACCESSOR,useExisting:forwardRef(()=>PhoneTextboxComponent),multi:true},
        {provide:NG_VALIDATORS,useExisting:forwardRef(()=>PhoneTextboxComponent),multi:true}
    ]
})
 export class PhoneTextboxComponent {
//     private onChange = (_:any)=>{ };
//     private onTouched = (_:any)=>{ };
//     private onValidate = (_:any)=>{ };
//     value :string;
//     disabled = false;
//     vaidate(contorl:AbstractControl):ValidationErrors{
//implements ControlValueAccessor

//     }
}