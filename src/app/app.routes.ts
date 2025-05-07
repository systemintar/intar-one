import { Routes } from '@angular/router';
import { PotrerosComponent } from './components/potreros/potreros.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppLayout } from './layout/layout/layout.component';

// Definir las rutas
export const appRoutes: Routes = [
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
    path: '', // La ruta principal para el layout
    component: AppLayout,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Inicio | Intar'
      },
      {
        path: 'potreros',
        component: PotrerosComponent,
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '**', // Ruta para páginas no encontradas
    redirectTo: 'login',
    pathMatch: 'full',
  }
];
