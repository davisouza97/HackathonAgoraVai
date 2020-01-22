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

  constructor(
    private inscricaoService: InscricaoService,
    private candidatoService: CandidatoService,
    private exameService: ExameService,
    public toastService: ToastService) { }

  ngOnInit() {
    this.exames = this.exameService.getExamesList();
    this.candidatos = this.candidatoService.getCandidatosList();
  }

  onSubmit() {
    this.submitted = true;
    this.salvar();
  }

  salvar() {
    const errosLog: string[] = [];
    if (this.inscricao.idExame == null) {
      errosLog.push('campo exame não pode estar vazio');
    }
    if (this.inscricao.idCandidato == null) {
      errosLog.push('campo candidato não pode estar vazio');
    }
    if (errosLog.length === 0) {
      this.inscricaoService.createInscricao(this.inscricao)
        .subscribe(data => {
          this.toastService.sucesso('Inscricao cadastrada com sucesso');
          this.novaInscricao();
        }, error => {
          console.log(error);
          this.toastService.dispararToastsErro(error.error);
        });
      this.inscricao = new Inscricao();
    } else {
      this.toastService.dispararToastsErro(...errosLog);
    }
  }

  novaInscricao() {
    this.submitted = false;
    this.inscricao = new Inscricao();
  }
}
