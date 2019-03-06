import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'


import { ResponsiveCalcComponent } from './responsive-calc/responsive-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveCalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
