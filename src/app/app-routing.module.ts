import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { ReporteComponent } from './reporte/reporte.component';

const Routes = [
  {path: 'admin', canActivate:[], component: AdminComponent},
  {path: 'admin/reporte', canActivate:[], component: ReporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
