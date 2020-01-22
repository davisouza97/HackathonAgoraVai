import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatoDetailsComponent } from './candidato-details/candidato-details.component';
import { CandidatoListComponent } from './candidato-list/candidato-list.component';
import { CandidatoPersistComponent } from './candidato-persist/candidato-persist.component';

const routes: Routes = [
    {
        path: '', component: CandidatoListComponent, children: [
            { path: 'add', component: CandidatoPersistComponent },
            { path: 'update/:id', component: CandidatoPersistComponent },
            { path: 'detalhes/:id', component: CandidatoDetailsComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgbModule
    ],
    exports: [RouterModule]
})
export class CandidatoRoutingModule { }
