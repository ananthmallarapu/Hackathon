import { CountService } from './count.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
