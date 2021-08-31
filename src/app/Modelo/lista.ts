export class Lista<T> {
  private _lista: T[] = [];

  agregar(dato: T){
      this._lista.push(dato);
  }

  obtenerlista (){
      return this._lista;
  }

}
