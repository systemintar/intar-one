import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';

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
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Inicio | Intar'
      },
      // Agrega otras rutas aquí según sea necesario
    ]
  },
  {
    path: '**', // Ruta para páginas no encontradas
    redirectTo: 'login',
    pathMatch: 'full',
  }
];
