import { Component, OnInit } from '@angular/core';
import { Lista } from '../Modelo/lista';
import { Usuario } from '../Modelo/usuario';
import { Venta } from '../Modelo/venta';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuarioN: Usuario = new Usuario("","","","",false);
  constructor(public _usuarioService: UsuarioService) {

  }



  formSubmit(){
    this._usuarioService.agregarUsuario(this.usuarioN.nombre, this.usuarioN.apellido, this.usuarioN.email, this.usuarioN.psw, false);
    this.usuarioN = new Usuario("","","","",false);
  }

  ngOnInit(): void {
  }

}
