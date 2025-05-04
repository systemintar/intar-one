import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component'; // Asegúrate de que la ruta sea correcta
import { NavbarComponent } from '../navbar/navbar.component'; // Asegúrate de que la ruta sea correcta
import { CommonModule } from '@angular/common'; // Esto es necesario para las directivas comunes
import { RouterModule } from '@angular/router'; // Para usar <router-outlet>

@Component({
  selector: 'app-layout',
  standalone: true, // Esto es necesario si estás usando Standalone Components
  imports: [
    CommonModule,  // Asegúrate de que CommonModule esté importado
    RouterModule,  // Importa RouterModule para <router-outlet>
    MenuComponent, // Importa el componente Menu
    NavbarComponent, // Importa el componente Navbar
  ],
  template: `
    <div class="flex h-screen bg-gray-100">
      <app-menu></app-menu>
    
      <div class="flex flex-col flex-1">
        <app-navbar></app-navbar>
    
        <main class="flex-1 p-4 overflow-auto">
          <!-- Aquí se cargarán las rutas hijas -->
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
})
export class LayoutComponent {}
