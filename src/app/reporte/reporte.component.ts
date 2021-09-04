import { Component, OnInit } from '@angular/core';
import { Venta } from '../Modelo/venta';
import { Lista } from '../Modelo/lista';
import { Usuario } from '../Modelo/usuario';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {

  public ventas: Lista<Venta> = new Lista<Venta>();
  public aVentas: Venta[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

}
