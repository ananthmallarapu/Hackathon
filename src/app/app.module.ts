import { HttpModule } from '@angular/http';
import { SubmissionService } from './submission.service';
import { CountService } from './count.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SubmissionService, CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
