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
@NgModule({
  declarations: [
    AppComponent,
    /*
    CreateCandidatoComponent,
    CandidatoDetailsComponent,
    CandidatoListComponent,
    UpdateCandidatoComponent,
    */
   /*
    CreateExameComponent,
    ExameDetailsComponent,
    ExameListComponent,
    UpdateExameComponent,
    */
    CreateInscricaoComponent,
    InscricaoListComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
