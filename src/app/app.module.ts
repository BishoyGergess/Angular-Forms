import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { UpdateOnComponent } from './update-on/update-on.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowErrorComponent } from './shared/showError.component';
import { FormSharedService } from './shared/formShared.service';
import { CamelToTitle } from './shared/camel-to-title.pipe';
import { ValidationService } from './shared/validatorService.service';
import { PhoneTextboxComponent } from './control-value-accessor/phone-textbox.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    UpdateOnComponent,
    TemplateFormComponent,
    StarterTemplateFormComponent,
    StarterReactiveFormComponent,
    ReactiveFormComponent,
    ReactiveDynamicFormComponent,
    ControlValueAccessorComponent,
    ShowErrorComponent,
    CamelToTitle,
    PhoneTextboxComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [FormSharedService,ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
