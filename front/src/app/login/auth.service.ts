import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AdministradorService } from '../administrador/administrador.service';
import { Administrador } from '../administrador/administrador';
import { ToastService } from '../_services/toast.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private chaveAutenticacao: string = "isLogado";

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private adminService: AdministradorService,
    private toastService: ToastService,
    @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  fazerLogin(admin: Administrador) {
    this.adminService.logar(admin).subscribe(
      data => {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
        this.storage.set(this.chaveAutenticacao, true);
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
    this.storage.set(this.chaveAutenticacao, false);
  }

  usuarioIsAutenticado(): boolean {
    this.usuarioAutenticado = this.storage.get(this.chaveAutenticacao) === true;
    return this.usuarioAutenticado;
  }
}
