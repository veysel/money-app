import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home/home.component';
import { RegisterComponent } from './Register/register.component';

import { AuthCanActivate } from './Auth/auth.can.activate';

import { StorageService } from './Storage/Services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {})
  ],
  providers: [
    AuthCanActivate,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
