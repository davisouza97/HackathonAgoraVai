import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateInscricaoComponent } from './inscricao/create-inscricao/create-inscricao.component';



const routes: Routes = [{
  path: '', redirectTo: '', pathMatch: 'full',
  canActivate: [AuthGuard]
},
{
  path: 'candidatos', loadChildren: './candidato/candidato.module#CandidatoModule',
  canActivate: [AuthGuard]
},
{
  path: 'exames', loadChildren: './exame/exame.module#ExameModule',
  canActivate: [AuthGuard]
},
{
  path: 'addInscricao', component: CreateInscricaoComponent,
  canActivate: [AuthGuard]
},
{ path: 'login', component: LoginComponent ,
//canActivate: [AuthGuard]
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
