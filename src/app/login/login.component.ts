import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 también aquí si usas ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // 👈 importante
  imports: [CommonModule, FormsModule], // 👈 agrega FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
}
