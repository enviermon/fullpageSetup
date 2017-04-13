import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'; 

import { HomeModule } from './home/home.module';
import {RouteReuseStrategy} from "@angular/router";
import {CustomReuseStrategy} from "./custom-reuse-strategy";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HomeModule
  ],
  declarations: [AppComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
