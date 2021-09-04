import { Component, NgModule, OnInit } from '@angular/core';
import { Producto } from '../Modelo/producto';
import { Lista } from '../Modelo/lista';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  public productos: Lista<Producto> = new Lista<Producto>();
  public aProductos: Producto[] = [];

  constructor(public modalEdit: NgbModal, public modalAdd: NgbModal) {

    var funko1 = new Producto("Aang", 80000, "https://drive.google.com/file/d/1ZevmhD6YUyyCa0TYN113eBj07D4R-u7e/view?usp=sharing", "Avatar: La leyenda de Aang", false);
    var funko2 = new Producto("Katara", 7000, "https://drive.google.com/file/d/1jXwO_qI3mLRD-UDeHqRBjBr2U2DkQ3Nu/view?usp=sharing", "Avatar: La leyenda de Aang", false);
    var funko3 = new Producto("Sokka", 7000, "https://drive.google.com/file/d/15JVN7JfF5Amhb4Tmh47ugDhtuHiig7Gy/view?usp=sharing", "Avatar: La leyenda de Aang", false);
    var funko4 = new Producto("Toph", 7500, "https://drive.google.com/file/d/1EAlbQjf8lpsOXsq_AKl7iwGTBYxfaaEN/view?usp=sharing", "Avatar: La leyenda de Aang", false);
    var funko5 = new Producto("Zuko", 8500, "https://drive.google.com/file/d/1zkoi7_lHQdTirnk24XRCgq1lxJdaUMHf/view?usp=sharing", "Avatar: La leyenda de Aang", false);
    var funko6 = new Producto("Chucky", 7500, "https://drive.google.com/file/d/1ExiUiRIQb9e1Gkfc_Ezl4peGBiVtZ1Zp/view?usp=sharing", "Chucky: El muñeco diabólico", false);
    var funko7 = new Producto("Jason Voorhees", 7000, "https://drive.google.com/file/d/1X1HOekSx17EWFqYpbEXFuIwLWRV9LuvY/view?usp=sharing", "Viernes 13", false);
    var funko8 = new Producto("Pennywise", 9000, "https://drive.google.com/file/d/1uwVcngOpljT_w3sQXFXAm8YU18m7R6Na/view?usp=sharing", "It", false);
    var funko9 = new Producto("Scooby Doo", 8000, "https://drive.google.com/file/d/1jcoc3d6HzKE9_zebFmGUqiSRN2kOjMDR/view?usp=sharing", "Scooby Doo", false);
    var funko10 = new Producto("Shaggy", 8000, "https://drive.google.com/file/d/1gGzgjvCTtkNh9-VV7IKDaed4PSHo6fpq/view?usp=sharing", "Scooby Doo", false);
    var funko11 = new Producto("Iron man", 9500, "https://drive.google.com/file/d/1yqOoF8aJSzsNoe6IBc-HMJXcJ3sJkoJQ/view?usp=sharing", "Marvel", false);
    var funko12 = new Producto("Dr. Strange", 8000, "https://drive.google.com/file/d/1iqgMo2zMvF-ZJaDEekV0gFQ2v0bRvzbo/view?usp=sharing", "Marvel", false);
    var funko13 = new Producto("Spiderman", 7500, "https://drive.google.com/file/d/11cc4AnSJZJLQrY-xHMNT1bHc61hAR2Lv/view?usp=sharing", "Marvel", false);
    var funko14 = new Producto("Thor", 7500, "https://drive.google.com/file/d/1QaQ8UReGltSVX0MZfungR4Ngg-Q8mS9h/view?usp=sharing", "Marvel", false);
    var funko15 = new Producto("Thanos", 8000, "https://drive.google.com/file/d/150f-6uTpE1YR8p48R66aizu0laufYv6_/view?usp=sharing", "Marvel", false);
    this.productos.agregar(funko1);
    this.productos.agregar(funko2);
    this.productos.agregar(funko3);
    this.productos.agregar(funko4);
    this.productos.agregar(funko5);
    this.productos.agregar(funko6);
    this.productos.agregar(funko7);
    this.productos.agregar(funko8);
    this.productos.agregar(funko9);
    this.productos.agregar(funko10);
    this.productos.agregar(funko11);
    this.productos.agregar(funko12);
    this.productos.agregar(funko13);
    this.productos.agregar(funko14);
    this.productos.agregar(funko15);

    this.aProductos = this.productos.obtenerlista();
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

}
