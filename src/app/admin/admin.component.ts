import { Component, OnInit } from '@angular/core';
import { Producto } from '../Modelo/producto';
import { Lista } from '../Modelo/lista';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public productos: Lista<Producto> = new Lista<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  //CRUD de productos
  public crearProducto(producto: Producto){
    this.productos.agregar(producto);
  }

  public actualizarProducto(){

  }

  public eliminarProducto(){

  }

}
