import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExameDetailsComponent } from './exame-details/exame-details.component';
import { UpdateExameComponent } from './update-exame/update-exame.component';
import { CreateExameComponent } from './create-exame/create-exame.component';
import { ExameListComponent } from './exame-list/exame-list.component';

const routes: Routes = [
    {
        path: 'lista', component: ExameListComponent, children: [
            { path: 'add', component: CreateExameComponent },
        ]
    },
    { path: 'update/:id', component: UpdateExameComponent },
    { path: 'detalhes/:id', component: ExameDetailsComponent }];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgbModule
    ],
    exports: [RouterModule]
})
export class ExameRoutingModule { }
