import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import {HwModule} from "./@modules/hw/hw.module";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HwModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ /*NO_ERRORS_SCHEMA*/ ]
})
export class AppModule { }
