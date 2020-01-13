import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExameDetailsComponent } from './exame-details/exame-details.component';
import { UpdateExameComponent } from './update-exame/update-exame.component';
import { CreateExameComponent } from './create-exame/create-exame.component';
import { ExameListComponent } from './exame-list/exame-list.component';
import { ExameRoutingModule } from './exame-routing.module';

@NgModule({
    declarations: [
        //AppComponent,
        CreateExameComponent,
        ExameDetailsComponent,
        ExameListComponent,
        UpdateExameComponent,
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
       ExameRoutingModule
    ],
    providers: []
})
export class ExameModule { }