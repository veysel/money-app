import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home/home.component';
import { RegisterComponent } from './Register/register.component';

import { AuthCanActivate } from './Auth/auth.can.activate';

import { StorageService } from './Storage/Services/storage.service';
import { MoneyService } from './Common/Service/money.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {}),
    HttpClientModule
  ],
  providers: [
    AuthCanActivate,
    StorageService,
    MoneyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
