import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatoDetailsComponent } from './candidato-details/candidato-details.component';
import { CandidatoListComponent } from './candidato-list/candidato-list.component';
import { CreateCandidatoComponent } from './create-candidato/create-candidato.component';
import { UpdateCandidatoComponent } from './update-candidato/update-candidato.component';

const routes: Routes = [
    { path: 'lista', component: CandidatoListComponent },
    { path: 'add', component: CreateCandidatoComponent },
    { path: 'update/:id', component: UpdateCandidatoComponent },
    { path: 'detalhes/:id', component: CandidatoDetailsComponent },];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgbModule
    ],
    exports: [RouterModule]
})
export class CandidatoRoutingModule { }
