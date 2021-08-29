import { Producto } from "./producto";
import { Venta } from "./venta";

export class Item
{
    constructor
    (
      public precioUnitario: number,
      public cantidad:number,
      public venta:Venta,
      public totalProducto: number, //cantidad*precioUnitario
      public producto:Producto
    ){}
}
