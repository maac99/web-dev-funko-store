import { Injectable } from '@angular/core';
import { Lista } from '../Modelo/lista';
import { Usuario } from '../Modelo/usuario';
import { Venta } from '../Modelo/venta';
import { Item } from "../Modelo/item";
import { Producto } from '../Modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  public ventas: Lista<Venta> = new Lista<Venta>();
  public aVentas: Venta[] = [];

  constructor() {
    let user: Usuario = new Usuario("m", "a", "mskaj", "jwd", false);
    let funko1 = new Producto("Aang", 80000, "https://imgur.com/p27Dttz.png", "Avatar: La leyenda de Aang", false);
    let funko2 = new Producto("Katara", 70000, "https://imgur.com/OmypY9J.png", "Avatar: La leyenda de Aang", false);
    let item1 = new Item(funko1.precio,1, funko1);
    let item2 = new Item(funko1.precio,1, funko2);

    let carrito: Item[] = [];
    carrito.push(item1);
    carrito.push(item2);

    let v = new Venta("12/09",carrito, user);

    this.ventas.agregar(v);


    this.aVentas = this.ventas.obtenerlista();

  }

  public agregarVenta(v: Venta){
    this.ventas.agregar(v);
    this.aVentas.push(v);
  }
}
