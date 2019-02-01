import { Routes } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';

import { AuthCanActivate } from './Auth/auth.can.activate';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthCanActivate] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];