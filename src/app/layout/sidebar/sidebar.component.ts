import { Component, ElementRef } from '@angular/core';
import { AppMenu } from '../menu/menu.component';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu],
    templateUrl: './sidebar.component.html'
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
}
