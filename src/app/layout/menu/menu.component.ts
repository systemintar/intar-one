import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '../menuitem/menuitem.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './menu.component.html'
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Eventos',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    { label: 'Ver eventos', icon: 'pi pi-fw pi-eye', routerLink: ['/eventos'] },
                    { label: 'Agregar evento', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/eventos/agregar'] }
                ]
            },
            {
                label: 'Prácticas Sanitarias',
                icon: 'pi pi-fw pi-heart',
                items: [
                    { label: 'Registrar práctica', icon: 'pi pi-fw pi-plus', routerLink: ['/practicas'] },
                    { label: 'Historial', icon: 'pi pi-fw pi-history', routerLink: ['/practicas/historial'] }
                ]
            },
            {
                label: 'Ventas y Producción',
                icon: 'pi pi-fw pi-chart-line',
                items: [
                    { label: 'Registrar venta', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/ventas'] },
                    { label: 'Producción', icon: 'pi pi-fw pi-industry', routerLink: ['/produccion'] }
                ]
            },
            {
                label: 'Compras',
                icon: 'pi pi-fw pi-cart-plus',
                items: [
                    { label: 'Nueva compra', icon: 'pi pi-fw pi-plus', routerLink: ['/compras/nueva'] },
                    { label: 'Historial', icon: 'pi pi-fw pi-list', routerLink: ['/compras/historial'] }
                ]
            },
            {
                label: 'Reportes',
                icon: 'pi pi-fw pi-file',
                items: [
                    { label: 'Generar reporte', icon: 'pi pi-fw pi-print', routerLink: ['/reportes'] }
                ]
            },
            {
                label: 'Vacunos',
                icon: 'pi pi-fw pi-cow',
                items: [
                    { label: 'Listado', icon: 'pi pi-fw pi-list', routerLink: ['/vacunos'] },
                    { label: 'Agregar', icon: 'pi pi-fw pi-plus', routerLink: ['/vacunos/agregar'] }
                ]
            },
            {
                label: 'Potreros',
                icon: 'pi pi-fw pi-map',
                items: [
                    { label: 'Gestionar potreros', icon: 'pi pi-fw pi-compass', routerLink: ['/potreros'] }
                ]
            },
            {
                label: 'Partos',
                icon: 'pi pi-fw pi-star',
                items: [
                    { label: 'Registrar parto', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/partos'] }
                ]
            },
            {
                label: 'Servicios',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    { label: 'Registrar servicio', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/servicios'] }
                ]
            },
            {
                label: 'Secados - Destetes',
                icon: 'pi pi-fw pi-sliders-h',
                items: [
                    { label: 'Secados', icon: 'pi pi-fw pi-ban', routerLink: ['/secados'] },
                    { label: 'Destetes', icon: 'pi pi-fw pi-send', routerLink: ['/destetes'] }
                ]
            },
            {
                label: 'Muertes',
                icon: 'pi pi-fw pi-times-circle',
                items: [
                    { label: 'Registrar muerte', icon: 'pi pi-fw pi-plus', routerLink: ['/muertes'] },
                    { label: 'Historial', icon: 'pi pi-fw pi-list', routerLink: ['/muertes/historial'] }
                ]
            }
        ];
    }
    
}
