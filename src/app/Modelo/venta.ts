import { Usuario } from "./usuario";

export class Venta{
  constructor
(
    public fecha: string,
    public items:[],
    public usuario: Usuario,
    public totalVenta: number //Suma del valor de los items
  ){}

}
