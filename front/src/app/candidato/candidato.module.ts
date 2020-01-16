import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CandidatoDetailsComponent } from '.././candidato/candidato-details/candidato-details.component';
import { CandidatoListComponent } from '.././candidato/candidato-list/candidato-list.component';
import { CreateCandidatoComponent } from ".././candidato/create-candidato/create-candidato.component";
import { CandidatoRoutingModule } from './candidato-routing.module';

@NgModule({
    declarations: [
        CreateCandidatoComponent,
        CandidatoDetailsComponent,
        CandidatoListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CandidatoRoutingModule
    ],
    providers: []
})
export class CandidatoModule { }