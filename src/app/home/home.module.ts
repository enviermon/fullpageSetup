import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent }   from './home.component';
import {MnFullpageDirective} from "../fullpagetest/mnFullpage.directive";
import {HeroSerivce} from "../service/hero.service";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    HomeRoutingModule, BrowserModule
  ],
  exports: [],
  declarations: [HomeComponent, MnFullpageDirective],
  providers: [HeroSerivce],
})
export class HomeModule { }
