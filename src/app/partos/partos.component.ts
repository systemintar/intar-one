import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router'; // <== NUEVO

export interface Parto {
  id: number;
  fecha: Date;
  animal: string;
  tipoParto: string;
  numCrias: number;
  sexoCria: string;
  observaciones: string;
}

@Component({
  selector: 'app-partos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DropdownModule
  ],
  templateUrl: './partos.component.html',
  styles: [`
    .p-datatable-frozen-tbody {
      font-weight: bold;
    }

    .p-datatable-scrollable .p-frozen-column {
      font-weight: bold;
    }
  `],
})
export class PartosComponent implements OnInit {
  partos: Parto[] = [];
  loading: boolean = true;

  sexos: SelectItem[] = [
    { label: 'Macho', value: 'Macho' },
    { label: 'Hembra', value: 'Hembra' }
  ];

  selectedSexo: string = '';

  @ViewChild('dtPartos') dtPartos!: Table;
  @ViewChild('filter') filterInput!: ElementRef;

  constructor(private router: Router) {}  // <== NUEVO

  ngOnInit() {
    setTimeout(() => {
      this.partos = [
        {
          id: 1,
          fecha: new Date('2025-04-28'),
          animal: 'Vaca 123',
          tipoParto: 'Natural',
          numCrias: 2,
          sexoCria: 'Macho',
          observaciones: 'Sin complicaciones'
        },
        {
          id: 2,
          fecha: new Date('2025-04-30'),
          animal: 'Vaca 456',
          tipoParto: 'Asistido',
          numCrias: 1,
          sexoCria: 'Hembra',
          observaciones: 'Requiere revisión veterinaria'
        }
        // … más datos …
      ];
      this.loading = false;
    }, 500);
  }

  onSexoChange(selectedSexo: string) {
    if (selectedSexo) {
      this.dtPartos.filter(selectedSexo, 'sexoCria', 'equals');
    } else {
      this.dtPartos.filter(null, 'sexoCria', 'equals');
    }
  }

  clear(table: Table) {
    table.clear();
    if (this.filterInput) {
      this.filterInput.nativeElement.value = '';
    }
  }

  onGlobalFilter(table: Table, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    table.filterGlobal(value, 'contains');
  }

  // ✅ Acciones (NUEVOS MÉTODOS)

  crearNuevoParto() {
    this.router.navigate(['/crear-parto']);
  }

  editarParto(id: number) {
    this.router.navigate(['/editar-parto', id]);
  }

  eliminarParto(id: number) {
    // Aquí puedes implementar una confirmación con PrimeNG ConfirmDialog
    console.log(`Eliminar parto con ID: ${id}`);
  }

  verParto(id: number) {
    this.router.navigate(['/ver-parto', id]);
  }
}
