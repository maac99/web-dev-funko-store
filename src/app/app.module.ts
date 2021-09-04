import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CatalogoComponent,
    RegistroComponent,
    SesionComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
