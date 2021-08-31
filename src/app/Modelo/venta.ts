import { Usuario } from "./usuario";
import { Item } from "./item";


export class Venta{
  constructor(
    public fecha: string,
    public carrito: Item[],
    public usuario: Usuario,
    public totalVenta: number //Suma del valor de los items
  ){}
}
