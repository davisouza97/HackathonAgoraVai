import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateInscricaoComponent } from './inscricao/create-inscricao/create-inscricao.component';



const routes: Routes = [{ path: '', redirectTo: '', pathMatch: 'full' },
/*
{ path: 'candidatos', component: CandidatoListComponent },
{ path: 'addCandidato', component: CreateCandidatoComponent },
{ path: 'updateCandidato/:id', component: UpdateCandidatoComponent },
{ path: 'candidatoDetails/:id', component: CandidatoDetailsComponent },
*/

{ path: 'candidatos', loadChildren: './candidato/candidato.module#CandidatoModule' },
{ path: 'exames', loadChildren: './exame/exame.module#ExameModule' },
/*
{ path: 'addExame', component: CreateExameComponent },
{ path: 'updateExame/:id', component: UpdateExameComponent },
{ path: 'exameDetails/:id', component: ExameDetailsComponent },

*/

{ path: 'addInscricao', component: CreateInscricaoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
