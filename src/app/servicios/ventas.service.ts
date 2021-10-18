import { Injectable } from '@angular/core';
import { Lista } from '../Modelo/lista';
import { Venta } from '../Modelo/venta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  public ventas: Lista<Venta> = new Lista<Venta>();
  public aVentas: Venta[] = [];

  constructor(private http:HttpClient) {}


  /*public agregarVenta(v: Venta){
    this.ventas.agregar(v);
    this.aVentas.push(v);
  }*/

  consultarVentasByDate(fecha:number):Observable<any>{
    let url = "http://localhost:8080/ventas/getVentasFecha" + fecha
    return this.http.get<any>(url);
  }
}
