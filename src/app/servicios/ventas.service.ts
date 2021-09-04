import { Injectable } from '@angular/core';
import { Lista } from '../Modelo/lista';
import { Venta } from '../Modelo/venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  public ventas: Lista<Venta> = new Lista<Venta>();
  public aVentas: Venta[] = [];

  constructor() {
  }

  public agregarVenta(v: Venta){
    this.ventas.agregar(v);
    this.aVentas.push(v);
  }
}
