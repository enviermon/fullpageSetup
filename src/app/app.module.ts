import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MnFullpageDirective} from "./fullpagetest/mnFullpage.directive";
import {HeroSerivce} from "./service/hero.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MnFullpageDirective],
  providers: [HeroSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
