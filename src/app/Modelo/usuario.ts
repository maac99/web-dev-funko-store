import { Venta } from "./venta";

export class Usuario{

  constructor(
      public nombre: string,
      public apellido: string,
      public email: string,
      public psw: string,
      public compras: Venta[],
      public admin: boolean
    ){}

}
