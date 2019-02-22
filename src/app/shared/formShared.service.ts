import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { FormModel } from './Form.model';

export class FormSharedService{
    powers:string[] = ['Fly','Really Smart', 'Super Flexible', 
    'Hypersound', 'Weather Changer'];
    submitted:boolean;
    form:NgForm;
    formGroup:FormGroup;
    formControl:FormControl;
    defultValue:FormModel = new FormModel(1,'dane','Ego','Fly','demo@demo.com');
    

}