export class Lista<T> {
  private _lista: T[] = [];

  agregar(dato: T){
      this._lista.push(dato);
  }

  obtenerlista (){
      return this._lista;
  }

  eliminar(dato: T){
    const index = this._lista.indexOf(dato);
    this._lista.splice(index, 1);
  }

}
