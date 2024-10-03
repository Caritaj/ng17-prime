import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    { icon: 'dashboard', label: 'Inicio', route: 'dashboard', },
    { icon: 'group', label: 'Operaciones', route: 'usuarios', },
    { icon: 'collections_bookmark', label: 'Tus productos', route: 'productos', },
    { icon: 'currency_exchange', label: 'Configuración', route: 'venta', },
    { icon: 'edit_note', label: 'Contáctanos', route: 'historial_venta', },
    { icon: 'receipt', label: 'Promos ClubHola', route: 'reportes', },
    { icon: 'receipt', label: 'Ofertas para ti', route: 'reportes', },
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
