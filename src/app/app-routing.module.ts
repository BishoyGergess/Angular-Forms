import { NgModule } from "@angular/core";
import{ Routes, RouterModule} from '@angular/router';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { AppComponent } from './app.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { UpdateOnComponent } from './update-on/update-on.component';
 

const routes:Routes = [
    {path:'',pathMatch:'full', redirectTo:'/startertemplateform'},
    { path:'startertemplateform' ,component:StarterTemplateFormComponent },
    { path:'starterreactiveform' ,component:StarterReactiveFormComponent },
    { path:'basicform' ,component:BasicFormComponent },
    { path:'templateform' ,component:TemplateFormComponent },
    { path:'reactiveform' ,component:ReactiveFormComponent },
    { path:'reactivedynamicform' ,component:ReactiveDynamicFormComponent },
    { path:'controlvalueaccessor' ,component:ControlValueAccessorComponent },
    { path:'updateon' ,component:UpdateOnComponent }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}