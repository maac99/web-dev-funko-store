import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { RegistroComponent } from './registro/registro.component';
import { ReporteComponent } from './reporte/reporte.component';
import { SesionComponent } from './sesion/sesion.component';

const Routes = [
  {path: 'admin', canActivate:[], component: AdminComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'sesion', component: SesionComponent},
  {path: 'admin/reporte', component: ReporteComponent},
  {path: 'misCompras', component: HistorialComprasComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
