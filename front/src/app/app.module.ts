import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCandidatoComponent } from "./candidato/create-candidato/create-candidato.component";
import { CandidatoDetailsComponent } from './candidato/candidato-details/candidato-details.component';
import { CandidatoListComponent } from './candidato/candidato-list/candidato-list.component';
import { UpdateCandidatoComponent } from './candidato/update-candidato/update-candidato.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateExameComponent } from './exame/create-exame/create-exame.component';
import { ExameDetailsComponent } from './exame/exame-details/exame-details.component';
import { ExameListComponent } from './exame/exame-list/exame-list.component';
import { UpdateExameComponent } from './exame/update-exame/update-exame.component';
import { CreateInscricaoComponent } from './inscricao/create-inscricao/create-inscricao.component';
import { InscricaoListComponent } from './inscricao/inscricao-list/inscricao-list.component';
import { ToastComponent } from './toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    /*
    CreateCandidatoComponent,
    CandidatoDetailsComponent,
    CandidatoListComponent,
    UpdateCandidatoComponent,
    */
    CreateExameComponent,
    ExameDetailsComponent,
    ExameListComponent,
    UpdateExameComponent,
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
