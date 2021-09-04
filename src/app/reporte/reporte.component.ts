import { Component, OnInit } from '@angular/core';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  public totalVFunkos: number = 0;

  constructor( public _ventaService: VentasService) {
    this.sumVentas();
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
