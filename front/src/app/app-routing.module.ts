import { CandidatoDetailsComponent } from './candidato/candidato-details/candidato-details.component';
import { CreateCandidatoComponent } from './candidato/create-candidato/create-candidato.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { CandidatoListComponent } from './candidato/candidato-list/candidato-list.component';
import { UpdateCandidatoComponent } from './candidato/update-candidato/update-candidato.component';
import { ExameDetailsComponent } from './exame/exame-details/exame-details.component';
import { ExameListComponent } from './exame/exame-list/exame-list.component';
import { CreateExameComponent } from './exame/create-exame/create-exame.component';
import { UpdateExameComponent } from './exame/update-exame/update-exame.component';
import { CreateInscricaoComponent } from './inscricao/create-inscricao/create-inscricao.component';
import { CandidatoRoutingModule } from './candidato/candidato-routing.module';



const routes: Routes = [{ path: '', redirectTo: '', pathMatch: 'full' },
/*
{ path: 'candidatos', component: CandidatoListComponent },
{ path: 'addCandidato', component: CreateCandidatoComponent },
{ path: 'updateCandidato/:id', component: UpdateCandidatoComponent },
{ path: 'candidatoDetails/:id', component: CandidatoDetailsComponent },
*/

{ path: 'candidatos', loadChildren: './candidato/candidato.module#CandidatoModule' },
{ path: 'exames', component: ExameListComponent },
{ path: 'addExame', component: CreateExameComponent },
{ path: 'updateExame/:id', component: UpdateExameComponent },
{ path: 'exameDetails/:id', component: ExameDetailsComponent },
{ path: 'addInscricao', component: CreateInscricaoComponent },];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
