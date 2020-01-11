import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidato } from '../../candidato/candidato';
import { CandidatoService } from '../../candidato/candidato.service';
import { Exame } from '../../exame/exame';
import { ExameService } from '../../exame/exame.service';
import { Inscricao } from '../Inscricao';
import { InscricaoService } from '../inscricao.service';
import { ToastService } from '../../_services/toast.service';

@Component({
  selector: 'app-create-inscricao',
  templateUrl: './create-inscricao.component.html',
  styleUrls: ['./create-inscricao.component.scss']
})
export class CreateInscricaoComponent implements OnInit {

  exames: Observable<Exame[]>;
  candidatos: Observable<Candidato[]>;
  inscricao: Inscricao = new Inscricao();
  submitted = false;
  candidatoId: number = null;
  exameId: number = null;

  constructor(private inscricaoService: InscricaoService,
    private router: Router, private candidatoService: CandidatoService,
    private exameService: ExameService, public toastService: ToastService) { }

  ngOnInit() {
    this.exames = this.exameService.getExamesList();
    this.candidatos = this.candidatoService.getCandidatosList();
  }
/*
precisa disso?????
*/
  newExame(): void {
    this.submitted = false;
    this.inscricao = new Inscricao();
  }

  save() {
    console.log(this.inscricao);
    if (this.inscricao.idExame == null || this.inscricao.idCandidato == null) {
      this.inscricao = undefined;
    }
    this.inscricaoService.createInscricao(this.inscricao)
      .subscribe(data => {
        console.log(data);
        this.toastService.sucesso('Inscricao cadastrada com sucesso')
        this.novaInscricao();
      }, error => {
        console.log(error);
        this.toastService.erro('Inscricao não cadastrada')
        //this.novaInscricao();
      });
    this.inscricao = new Inscricao();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  novaInscricao() {
    this.newExame();
  }
  gotoList() {
    this.router.navigate(['/addInscricao']);
  }
}