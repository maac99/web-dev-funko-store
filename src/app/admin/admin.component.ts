import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { Producto } from '../Modelo/producto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public funko: Producto = new Producto("",0,"","", false);
  public funkoNuevo: Producto = new Producto("",0,"","", false);
  public des: string = "";
  public precio: number = 0;
  constructor(public modalEdit: NgbModal, public modalAdd: NgbModal,  private router: Router, @Inject(ProductoService) public _productoService : ProductoService) {}

  ngOnInit(): void {
  }

  //CRUD de productos
  public crearProducto(){
    console.log(this.funkoNuevo);
    this._productoService.aFunkos.push(this.funkoNuevo);
    this.modalAdd.dismissAll()
  }

  public actualizarProducto(prod: Producto){
    this.funkoNuevo = new Producto(prod.nombre, this.precio, prod.imagen, this.des, false);
    this.eliminarProducto(prod);
    this._productoService.aFunkos.push(this.funkoNuevo);
    this.modalEdit.dismissAll();
  }

  formSubmitAdd(){
    this.crearProducto();
  }

  formSubmit(prod: Producto){
    this.funko = prod;
    this.actualizarProducto(this.funko);
  }

  public eliminarProducto(prod: Producto){
    alert("Esta es definitiva");
    this._productoService.funkos.eliminar(prod);
  }

  public verReportes(){
    this.router.navigateByUrl("/admin/reporte");
  }
}