import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MnFullpageDirective} from "./fullpagetest/mnFullpage.directive";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MnFullpageDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
