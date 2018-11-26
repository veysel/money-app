import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home/home.component';

import { AuthCanActivate } from './Auth/auth.can.activate';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {})
  ],
  providers: [
    AuthCanActivate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
