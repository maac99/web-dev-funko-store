import { Venta } from "./venta";

export class Usuario{
  public nombre: string;
  public apellido: string;
  public email: string;
  public psw: string;
  public compras: Venta[];
  public admin: boolean;
  constructor(nombre: string, apellido: string, email: string, psw: string, admin: boolean){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.psw = psw;
    var compras: Venta[] = [];
    this.compras = compras;
    this.admin = admin;
  }

}
