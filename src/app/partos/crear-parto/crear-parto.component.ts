import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-parto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './crear-parto.component.html',
  styleUrls: ['./crear-parto.component.scss']
})
export class CrearPartoComponent {
  identificacionesHembras = [
    { label: 'Vaca 123', value: '123' },
    { label: 'Vaca 456', value: '456' }
  ];

  condicionesCorporales = [
    { label: 'Buena', value: 'Buena' },
    { label: 'Regular', value: 'Regular' },
    { label: 'Mala', value: 'Mala' }
  ];

  sexos = [
    { label: 'Macho', value: 'Macho' },
    { label: 'Hembra', value: 'Hembra' }
  ];

  parto = {
    hembra: '',
    condicion: '',
    criaSexo: '',
    criaIdentificacion: '',
    criaPeso: '',
    observaciones: ''
  };

  constructor(private router: Router) {}

  guardarParto() {
    console.log('Parto guardado:', this.parto);
    // Aquí podrías enviar los datos al backend
    this.router.navigate(['/partos']); // o la ruta que uses
  }

  cancelar() {
    this.router.navigate(['/partos']); // o la ruta que uses
  }
}
