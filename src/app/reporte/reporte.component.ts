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
  public user:Usuario = new Usuario("monica", "alvarez", "moni", "1234", [], false);

  constructor() {
    var v1 = new Venta("12/09",[],this.user, 1121);
    var v2 = new Venta("12/09", [],this.user,32323);
    var v3 = new Venta("12/09",[] ,this.user,2323 );
    var v4 = new Venta("12/09", [],this.user,323 );
    var v5 = new Venta("12/09", [],this.user,3232 );
    this.ventas.agregar(v1);
    this.ventas.agregar(v2);
    this.ventas.agregar(v3);
    this.ventas.agregar(v4);
    this.ventas.agregar(v5);

    this.aVentas = this.ventas.obtenerlista();
  }

  ngOnInit(): void {
  }

}
