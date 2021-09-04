import { Usuario } from "./usuario";
import { Item } from "./item";


export class Venta{
  public fecha: string;
  public carrito: Item[];
  public usuario: Usuario;
  public totalVenta: number = 0;

  constructor(fecha: string, carrito: Item[], usuario: Usuario){
    this.fecha = fecha;
    this.carrito = carrito;
    this.usuario = usuario;
    for(let ventaI of carrito){
      this.totalVenta = this.totalVenta + ventaI.totalProducto;
    }
  }
}
