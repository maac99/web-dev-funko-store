import { Component, OnInit } from '@angular/core';
import { Item } from '../Modelo/item';
import { Producto } from '../Modelo/producto';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  public fotito: string = "https://imgur.com/p27Dttz.png";
  public carritoSeleccionado: Item[] = [];
  constructor(public _productoService: ProductoService) {
  
  }
  public agregarItem(prod:Producto, canti:number){
    var nuevo:boolean = true; 
    for(let agregado of this.carritoSeleccionado)
    {
      if(agregado.producto.nombre === prod.nombre)
      {
        agregado.cantidad ++;
        nuevo = false;
      }
    }
    if(nuevo)
    {
      var itemNuevo:Item = new Item(prod.precio, 1, prod);
      this.carritoSeleccionado.push(itemNuevo);
    }
    alert("Producto añadido al carrito");
  }

  ngOnInit(): void {
  }

}