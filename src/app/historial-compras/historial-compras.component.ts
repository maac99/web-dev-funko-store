import { Component, OnInit } from '@angular/core';
import { Venta } from '../Modelo/venta';
import { VentasService } from '../servicios/ventas.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  constructor(public _ventasService : VentasService, public modalDetail: NgbModal) { }

  verDetalle(venta: Venta){

  }


  ngOnInit(): void {
  }

}
