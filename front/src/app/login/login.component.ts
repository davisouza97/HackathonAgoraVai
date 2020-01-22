import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Administrador } from '../administrador/administrador';
import { AdministradorService } from '../administrador/administrador.service';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admin: Administrador = new Administrador();
  telaCadastro = false;


  constructor(
    private authService: AuthService,
    private administradorService: AdministradorService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  fazerLogin() {
    const logAuth: string[] = this.validarAdmin(this.admin);
    if (logAuth.length === 0) {
      this.authService.fazerLogin(this.admin);
    } else {
      this.toastService.dispararToastsErro(...logAuth);
    }
  }

  fazerCadastroLogin() {

    this.administradorService.salvar(this.admin).subscribe(
      data => {
        this.authService.fazerLogin(this.admin);
        this.toastService.sucesso('CADASTRADO E LOGADO COM SUCESSO', 3000);
      }, error => {
        this.toastService.erro(error.error);
      }
    );
  }

  mudarTela() {
    this.telaCadastro = !this.telaCadastro;
  }

  deslogar() {
    this.authService.deslogar();
  }

  private validarAdmin(admin: Administrador): string[] {
    const authLog: string[] = [];
    if (admin.email === '') {
      authLog.push('Campo email deve estar preenchido');
    }
    // tslint:disable-next-line: max-line-length
    if (!admin.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      authLog.push('Campo email deve estar preenchido Corretamente');
    }
    return authLog;
  }
}
