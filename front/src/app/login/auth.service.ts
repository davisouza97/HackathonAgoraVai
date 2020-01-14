import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private usuarioAutenticado: boolean = false;
  email: string = "abc@abc";
  senha: string = "123";
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor( private router: Router, ) { }



  fazerLogin(inputEmail: string,inputSenha: string) {
    //parte que iria no back
    if (this.email === inputEmail && this.senha === inputSenha) {
      debugger
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioIsAutenticado(): boolean{
    return this.usuarioAutenticado;
  }
}
