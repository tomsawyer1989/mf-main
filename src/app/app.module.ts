import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LoginComponent } from './steps/login.component';
import { InstructionsComponent } from './steps/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    LoginComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue: '/microfrontends-example'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
