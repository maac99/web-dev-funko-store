import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './admin-guard.guard';
import { AdminComponent } from "./admin/admin.component";
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { ReporteComponent } from './reporte/reporte.component';
import { SesionComponent } from './sesion/sesion.component';
import { UserAuthGuard } from './user-guard.guard';

const Routes = [
  {path: 'admin', canActivate:[AdminAuthGuard], component: AdminComponent},
  {path: 'catalogo', canActivate:[UserAuthGuard], component: CatalogoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: SesionComponent},
  {path: 'admin/reporte', canActivate:[AdminAuthGuard],component: ReporteComponent},
  {path: 'misCompras', canActivate:[UserAuthGuard], component: HistorialComprasComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
