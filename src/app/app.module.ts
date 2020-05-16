import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
