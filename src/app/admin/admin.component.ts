import { Component, NgModule, OnInit } from '@angular/core';
import { Producto } from '../Modelo/producto';
import { Lista } from '../Modelo/lista';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  public productos: Lista<Producto> = new Lista<Producto>();
  public aProductos: Producto[] = [];

  constructor(public modalEdit: NgbModal, public modalAdd: NgbModal,  private router: Router, ) {
  }

  ngOnInit(): void {
  }

  //CRUD de productos
  public crearProducto(nombre: string, descr:string, precio:number, url:string){
    this.modalAdd.dismissAll();
    //this.productos.agregar(prod);
  }

  public actualizarProducto(prod: Producto){
    this.modalEdit.dismissAll();
  }

  public eliminarProducto(prod: Producto){
    this.productos.eliminar(prod);
    this.aProductos = this.productos.obtenerlista();
  }

  public verReportes(){
    this.router.navigateByUrl("/admin/reporte");
  }

}
