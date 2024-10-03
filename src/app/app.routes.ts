import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HistorialVentaComponent } from './components/pages/historial-venta/historial-venta.component';
import { ProductoComponent } from './components/pages/producto/producto.component';
import { ReporteComponent } from './components/pages/reporte/reporte.component';
import { UsuarioComponent } from './components/pages/usuario/usuario.component';
import { VentaComponent } from './components/pages/venta/venta.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'productos', component: ProductoComponent },
    { path: 'venta', component: VentaComponent },
    { path: 'historial_venta', component: HistorialVentaComponent },
    { path: 'reportes', component: ReporteComponent },

];
