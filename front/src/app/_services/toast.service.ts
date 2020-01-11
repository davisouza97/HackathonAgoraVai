// toast.service.ts
import { Injectable, TemplateRef  } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class ToastService {
 
  toasts: any[] = [];
 
  // Push new Toasts to array with content and options
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }
 
  // Callback method to remove Toast DOM element from view
  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  sucesso(mensagem: string , tempo: number = 2000){
    this.show(
      mensagem, {
      classname: 'bg-success text-light',
      delay: tempo,
      autohide: true
      });
  }

  erro(mensagem: string , tempo: number = 2000){
    this.show(
      mensagem, {
      classname: 'bg-danger text-light',
      delay: tempo,
      autohide: true,
      });
  }

  padrao(mensagem: string, tempo: number = 2000) {
    this.show(
      mensagem, {
      delay: tempo,
      autohide: true,
    });
  }

}