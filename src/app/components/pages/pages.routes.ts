import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { ProductoComponent } from "./producto/producto.component";
import { VentaComponent } from "./venta/venta.component";
import { HistorialVentaComponent } from "./historial-venta/historial-venta.component";
import { ReporteComponent } from "./reporte/reporte.component";

export const LAYOUT_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'usuarios', component: UsuarioComponent },
            { path: 'productos', component: ProductoComponent },
            { path: 'venta', component: VentaComponent },
            { path: 'historial_venta', component: HistorialVentaComponent },
            { path: 'reportes', component: ReporteComponent },
        ]
    }
];
