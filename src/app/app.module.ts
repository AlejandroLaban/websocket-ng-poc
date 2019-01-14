import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WsTestComponent } from './ws-test/ws-test.component';
import {WsTestService} from "./ws-test.service";

@NgModule({
  declarations: [
    AppComponent,
    WsTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WsTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
