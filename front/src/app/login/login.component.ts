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
  cadastro = false;


  constructor(private authService: AuthService, private administradorService: AdministradorService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.fazerLogin(this.admin);
  }

  fazerCadastroLogin() {
    this.administradorService.salvar(this.admin).subscribe(
      data => {
        this.administradorService.logar(this.admin);
        this.toastService.sucesso("CADASTRADO E LOGADO COM SUCESSO", 3000);
      }, error => {
        this.toastService.erro(error.error);
      }
    );
  }

  cadastrar() {
    this.cadastro = !this.cadastro;
  }

}