import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { CatalogoComponent } from './catalogo/catalogo.component';

const Routes = [
  {path: 'admin', canActivate:[], component: AdminComponent},
  {path: 'catalogo', component: CatalogoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
