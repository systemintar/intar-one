import { Routes } from '@angular/router';
import { PotrerosComponent } from './components/potreros/potreros.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Inicio | Intar'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login | Intar'
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Forgot Password | Intar'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register | Intar'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'potreros',
    component: PotrerosComponent,
    pathMatch: 'full',
  },
];
