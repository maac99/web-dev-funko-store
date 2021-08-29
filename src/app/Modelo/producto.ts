export class Producto {

  //public id:number;
  public activo:boolean = true;

  constructor(
    public nombre: string,
    public precio: number,
    public imagen: string,
    public descripcion: string,
    public editar: boolean
  ) {}
}
