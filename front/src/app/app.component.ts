import { AuthService } from './login/auth.service';
import { Component, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vestibular';

  public data: any = []

  constructor(private authService: AuthService,
    @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(() => {
    });
  }

  mostrarMenu(): boolean {
    return this.authService.usuarioIsAutenticado();
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
  }

  getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key] = this.storage.get(key);
    console.log(this.data);
  }

  deslogar() {
    this.authService.deslogar();
  }
}
