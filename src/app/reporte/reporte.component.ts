import { Component, OnInit } from '@angular/core';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor( public _ventaService: VentasService) { }

  ngOnInit(): void {
  }

}
