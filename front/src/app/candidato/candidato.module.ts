import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatoDetailsComponent } from '.././candidato/candidato-details/candidato-details.component';
import { CandidatoListComponent } from '.././candidato/candidato-list/candidato-list.component';
import { CreateCandidatoComponent } from ".././candidato/create-candidato/create-candidato.component";
import { UpdateCandidatoComponent } from '.././candidato/update-candidato/update-candidato.component';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        //AppComponent,
        CreateCandidatoComponent,
        CandidatoDetailsComponent,
        CandidatoListComponent,
        UpdateCandidatoComponent,
    ],
    imports: [/*
        CommonModule,
        CandidatoRoutingModule,
        
        FormsModule,
        NgbModule,
        //FormsModule,
        CommonModule,
        //BrowserModule
        */
       CommonModule,
       FormsModule,
       CandidatoRoutingModule
    ],
    providers: []
})
export class CandidatoModule { }