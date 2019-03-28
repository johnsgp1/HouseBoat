import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderModule } from 'angular-image-slider';
import { PackagesComponent } from './packages/packages.component';
import { OwlModule } from 'ngx-owl-carousel';
import {DeviceDetectorModule} from 'ngx-device-detector'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SliderModule,
    OwlModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
