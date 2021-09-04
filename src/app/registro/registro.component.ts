import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../Modelo/usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuarioN: Usuario = new Usuario("","","","",false);
  constructor(public _usuarioService: UsuarioService, private router: Router) {

  }



  formSubmit(){
    this._usuarioService.agregarUsuario(this.usuarioN.nombre, this.usuarioN.apellido, this.usuarioN.email, this.usuarioN.psw, false);
    this.usuarioN = new Usuario("","","","",false);
    this.router.navigateByUrl("/sesion");
  }

  ngOnInit(): void {
  }

}
