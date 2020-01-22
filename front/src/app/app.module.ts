import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateInscricaoComponent } from './inscricao/create-inscricao/create-inscricao.component';
import { InscricaoListComponent } from './inscricao/inscricao-list/inscricao-list.component';
import { ToastComponent } from './toast/toast.component';
import { LoginComponent } from './login/login.component';
import { StorageServiceModule} from 'angular-webstorage-service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    CreateInscricaoComponent,
    InscricaoListComponent,
    ToastComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    StorageServiceModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
