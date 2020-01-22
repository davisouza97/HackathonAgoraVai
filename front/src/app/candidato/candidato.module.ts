import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CandidatoDetailsComponent } from '.././candidato/candidato-details/candidato-details.component';
import { CandidatoListComponent } from '.././candidato/candidato-list/candidato-list.component';
import { CandidatoPersistComponent } from './candidato-persist/candidato-persist.component';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [
        CandidatoPersistComponent,
        CandidatoDetailsComponent,
        CandidatoListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CandidatoRoutingModule,
        Ng2SearchPipeModule
    ],
    providers: []
})
export class CandidatoModule { }
