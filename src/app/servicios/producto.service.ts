import { Injectable } from '@angular/core';
import { Lista } from '../Modelo/lista';
import { Producto } from '../Modelo/producto';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  public funkos: Lista<Producto> = new Lista<Producto>();
  public aFunkos: Producto[] = [];
  //Constructor
  constructor(private http:HttpClient) {}

  agregarProducto(producto:Producto):Observable<any> {
    let url = "http://localhost:8080/productos"
    return this.http.post<any>(url,producto);
  }

  actualizarProducto(producto:Producto):Observable<any>{
    let url = "http://localhost:8080/actualizar" + producto.id
    return this.http.put<any>(url,producto);
  }

  eliminarProducto(producto:Producto):Observable<any> {
    let url = "http://localhost:8080/productos/eliminar/" + producto.id
    return this.http.delete<any>(url);
  }


}
