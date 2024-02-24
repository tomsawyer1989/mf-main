import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { globalReducer } from './store/store.reducer';

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
    AppRoutingModule,
    StoreModule.forRoot({ MAIN: globalReducer }, {
      metaReducers: [localStorageSync({ keys: ['MAIN'], rehydrate: true })]
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue: '/example-spa/main'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
