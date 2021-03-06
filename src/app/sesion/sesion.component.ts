import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Modelo/usuario';
import { RegistroComponent } from '../registro/registro.component';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  public email: string ="";
  public psw: string = "";

  constructor(public _usuarioService: UsuarioService, public router: Router) {
  }

public verificarUsuario(email: string, psw: string){
  for(let usuario of this._usuarioService.aUsuarios){
    if(email == usuario.email){
      if(psw == usuario.psw){
        this._usuarioService.iniciado = true;
        this.email = email;
        this.psw = psw;
        this._usuarioService.usuarioL = usuario;
        localStorage.setItem('user',usuario.email);
        alert("Inició sesión satisfactoriamente.");
        this.router.navigateByUrl("/home");
      }else{
        alert("Contraseña incorrecta.");
      }
    }
  }
  if(this._usuarioService.iniciado == false){
    alert("Este correo no está registrado.");
  }
}

  formSubmit(){
    this.verificarUsuario(this.email, this.psw);
  }

  ngOnInit(): void {
  }

}
