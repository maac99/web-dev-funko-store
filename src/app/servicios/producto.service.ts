import { Injectable } from '@angular/core';
import { Lista } from '../Modelo/lista';
import { Producto } from '../Modelo/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  public funkos: Lista<Producto> = new Lista<Producto>();
  public aFunkos: Producto[] = [];
  constructor() { 
    var funko1 = new Producto("Aang", 80000, "https://imgur.com/p27Dttz.png", "Avatar: La leyenda de Aang", false);
    var funko2 = new Producto("Katara", 70000, "https://imgur.com/OmypY9J.png", "Avatar: La leyenda de Aang", false);
    var funko3 = new Producto("Sokka", 70000, "https://imgur.com/EJjEBZW.png", "Avatar: La leyenda de Aang", false);
    var funko4 = new Producto("Toph", 75000, "https://imgur.com/OgFBJuA.png", "Avatar: La leyenda de Aang", false);
    var funko5 = new Producto("Zuko", 85000, "https://imgur.com/KaRj6tZ.png", "Avatar: La leyenda de Aang", false);
    var funko6 = new Producto("Chucky", 75000, "https://imgur.com/SKARfAN.png", "Chucky: El muñeco diabólico", false);
    var funko7 = new Producto("Jason Voorhees", 70000, "https://imgur.com/u0dyVJf.png", "Viernes 13", false);
    var funko8 = new Producto("Pennywise", 90000, "https://imgur.com/87cU1V1.png", "It", false);
    var funko9 = new Producto("Scooby Doo", 80000, "https://imgur.com/EL2d42G.png", "Scooby Doo", false);
    var funko10 = new Producto("Shaggy", 80000, "https://imgur.com/SsGhKPp.png", "Scooby Doo", false);
    var funko11 = new Producto("Iron man", 95000, "https://imgur.com/zoH5Geo.png", "Marvel", false);
    var funko12 = new Producto("Dr. Strange", 80000, "https://imgur.com/ihFg5W5.png", "Marvel", false);
    var funko13 = new Producto("Spiderman", 75000, "https://imgur.com/wKo96U5.png", "Marvel", false);
    var funko14 = new Producto("Thor", 75000, "https://imgur.com/gttD5Jd.png", "Marvel", false);
    var funko15 = new Producto("Thanos", 80000, "https://imgur.com/1Ju8Xh3.png", "Marvel", false);
    this.funkos.agregar(funko1);
    this.funkos.agregar(funko2);
    this.funkos.agregar(funko3);
    this.funkos.agregar(funko4);
    this.funkos.agregar(funko5);
    this.funkos.agregar(funko6);
    this.funkos.agregar(funko7);
    this.funkos.agregar(funko8);
    this.funkos.agregar(funko9);
    this.funkos.agregar(funko10);
    this.funkos.agregar(funko11);
    this.funkos.agregar(funko12);
    this.funkos.agregar(funko13);
    this.funkos.agregar(funko14);
    this.funkos.agregar(funko15);

    this.aFunkos = this.funkos.obtenerlista();
  }
}
