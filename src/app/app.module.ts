import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HoursmadeModule} from './hoursmade/hoursmade.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HoursmadeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
