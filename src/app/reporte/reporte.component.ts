import { Component, OnInit } from '@angular/core';
import { Venta } from '../Modelo/venta';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  public totalVFunkos: number = 0;
  public ventas: Venta[] = [];


  constructor( public _ventaService: VentasService) {
    this.sumVentas();
    _ventaService.consultarVentasByDate(this.getFecha());
  }

  public getFecha(): number{
    let hoy = new Date();
    let dd = String(hoy.getDate()).padStart(2, '0');
    let mm = String(hoy.getMonth() + 1).padStart(2, '0');
    let yyyy = hoy.getFullYear();
    let stringFecha = yyyy+mm+dd;
    let fecha = Number(stringFecha);
    return fecha;
  }

  public sumVentas(){
    this.totalVFunkos = 0;
    for(let venta of this._ventaService.aVentas){
      this.totalVFunkos += venta.totalVenta;
    }
    return this.totalVFunkos;
  }

  ngOnInit(): void {
  }

}
