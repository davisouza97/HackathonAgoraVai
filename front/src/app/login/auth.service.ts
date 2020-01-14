import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdministradorService } from '../administrador/administrador.service';
import { Administrador } from '../administrador/administrador';
import { ToastService } from '../_services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private adminService: AdministradorService,
    private toastService: ToastService) { }



  fazerLogin(admin: Administrador) {
    //let admin: Administrador = new Administrador();
    //admin.email = inputEmail;
    //admin.senha = inputSenha;

    this.adminService.logar(admin).subscribe(
      data => {
        debugger;
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
        this.toastService.sucesso("LOGADO COM SUCESSO");
      }, error => {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        this.toastService.erro(error.error);
      }
    );

  }
  usuarioIsAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
/*
  //parte que iria no back
  if(this.email === inputEmail && this.senha === inputSenha) {
  debugger
  this.usuarioAutenticado = true;
  this.mostrarMenuEmitter.emit(true);
  this.router.navigate(['/']);
} else {
  this.usuarioAutenticado = false;
  this.mostrarMenuEmitter.emit(false);
}
  }

*/
}
