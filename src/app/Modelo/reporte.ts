import { Venta } from "./venta";
export class Reporte
{
    constructor
    (
      public ventas: Venta[],
      public fecha: string,
      public totalVentas: number,
    )
    {}
}
