import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {appRouting} from "./app.routing";
import {UserModule} from "./user/user.module";
import {AboutModule} from "./about/about.module";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    UserModule,
    AboutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
