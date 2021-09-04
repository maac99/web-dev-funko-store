import { Injectable } from '@angular/core';
import { Lista } from '../Modelo/lista';
import { Usuario } from '../Modelo/usuario';
import { Venta } from '../Modelo/venta';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public usuarios: Lista<Usuario> = new Lista<Usuario>();
  public aUsuarios: Usuario[] = [];
  public iniciado: boolean;
  public usuarioL: Usuario = new Usuario("","","","",false);
  constructor() { 

    this.iniciado = false;
    var venta1: Venta[] = [];
    var admin1 = new Usuario("Monica", "Alvarez", "monica_alvarez@javeriana.edu.co", "1234", true);
    var venta2: Venta[] = [];
    var admin2 = new Usuario("Paula", "Pineros", "pineros.paula@javeriana.edu.co", "1234", true);
    var venta3: Venta[] = [];
    var usuario1 = new Usuario("Alejandra", "Carrillo", "monica_alvarez@gmail.com", "1234", false);
    var venta4: Venta[] = [];
    var usuario2 = new Usuario("Catalina", "Pardo", "pineros.paula@gmail.com", "1234", false);

    this.usuarios.agregar(admin1);
    this.usuarios.agregar(admin2);
    this.usuarios.agregar(usuario1);
    this.usuarios.agregar(usuario2);

    this.aUsuarios = this.usuarios.obtenerlista();
  }

  public agregarUsuario(nombre: string, apellido: string, email: string, psw: string, admin: boolean){
    var nuevo: boolean = true;
    for(let usuario of this.aUsuarios){
      if(usuario.email == email){
        nuevo = false;
        alert("Este correo ya estaba registrado, intente otro.")
      }
    }
    if(nuevo){
      var usuarioNuevo = new Usuario(nombre, apellido, email,psw,admin);
      this.usuarios.agregar(usuarioNuevo);
      this.aUsuarios.push(usuarioNuevo);
      alert("Usuario registrado exitosamente.")
    }  
  }

}
