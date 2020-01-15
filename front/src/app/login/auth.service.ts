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
  //private usuarioAutenticado: boolean = true;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private adminService: AdministradorService,
    private toastService: ToastService) { }

  fazerLogin(admin: Administrador) {

    this.adminService.logar(admin).subscribe(
      data => {
        debugger;
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
      }, error => {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        this.toastService.erro(error.error);
      }
    );
  }
  deslogar() {
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['/login']);
  }

  usuarioIsAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}
