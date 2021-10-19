import { Component, OnInit } from '@angular/core';
import { Item } from '../Modelo/item';
import { Producto } from '../Modelo/producto';
import { Venta } from '../Modelo/venta';
import { ProductoService } from '../servicios/producto.service';
import { UsuarioService } from '../servicios/usuario.service';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  public fotito: string = "https://imgur.com/p27Dttz.png";
  public productos: Producto [] = [];
  public carritoSeleccionado: Item[] = [];

  constructor(public _productoService: ProductoService, public _usuarioService: UsuarioService, public _ventasService: VentasService) { }

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
  public comprarItems(){
    var venta = new Venta("04/09/2021", this.carritoSeleccionado, this._usuarioService.usuarioL);
    //this._usuarioService.agregarCompra(venta);
    //this._ventasService.agregarVenta(venta);
    alert("Compra exitosa: \n \n" + "Nombre: " + this._usuarioService.usuarioL.nombre + "\n \n Dinero pagado: " + venta.totalVenta);
  }

  public llenarCatalogo(){
    this._productoService.getProductos().subscribe(
    results => (this.productos = results),
    error => {
      console.log(error)
    });
  }

  ngOnInit(): void {
    this.llenarCatalogo();
    console.log(this.productos.length);
  }

}
