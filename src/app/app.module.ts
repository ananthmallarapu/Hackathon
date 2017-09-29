import { HttpModule } from '@angular/http';
import { SubmissionService } from './submission.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SubmissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
