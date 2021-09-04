import { Producto } from "./producto";

export class Item
{
  public precioUnitario: number;
  public cantidad:number;
  public totalProducto: number; //cantidad*precioUnitario
  public producto:Producto;
    
  constructor(precioUnitario: number, cantidad:number, producto:Producto, totalProducto?: number){
    this.precioUnitario = precioUnitario;
    this.cantidad = cantidad;  
    this.producto = producto;
    if(totalProducto){
      this.totalProducto = totalProducto;
    }else{
      this.totalProducto = cantidad*precioUnitario;
    }

  }
}
