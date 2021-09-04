import { Component, OnInit } from '@angular/core';
import { Venta } from '../Modelo/venta';
import { Lista } from '../Modelo/lista';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class REPORTEComponent {

  public ventas: Lista<Venta> = new Lista<Venta>();
  public aVentas: Venta[] = [];

  constructor() {
    var v1 = new Venta("Aang", 80000, "https://drive.google.com/file/d/1ZevmhD6YUyyCa0TYN113eBj07D4R-u7e/view?usp=sharing", "Avatar: La leyenda de Aang", false);
    var v2 = new Venta("Katara", 7000, "https://drive.google.com/file/d/1jXwO_qI3mLRD-UDeHqRBjBr2U2DkQ3Nu/view?usp=sharing", "Avatar: La leyenda de Aang", false);
    var v3 = new Venta("Sokka", 7000, "https://drive.google.com/file/d/15JVN7JfF5Amhb4Tmh47ugDhtuHiig7Gy/view?usp=sharing", "Avatar: La leyenda de Aang", false);
    var v4 = new Venta("Toph", 7500, "https://drive.google.com/file/d/1EAlbQjf8lpsOXsq_AKl7iwGTBYxfaaEN/view?usp=sharing", "Avatar: La leyenda de Aang", false);
    var v5 = new Venta("Zuko", 8500, "https://drive.google.com/file/d/1zkoi7_lHQdTirnk24XRCgq1lxJdaUMHf/view?usp=sharing", "Avatar: La leyenda de Aang", false);
    this.ventas.agregar(v1);
    this.ventas.agregar(v2);
    this.ventas.agregar(v3);
    this.ventas.agregar(v4);
    this.ventas.agregar(v5);

    this.aVentas = this.ventas.obtenerlista();
  }

  ngOnInit(): void {
  }

}
