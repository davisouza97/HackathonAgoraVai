import { ExameListComponent } from './../exame-list/exame-list.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../_services/toast.service';
import { Exame } from '../exame';
import { ExameService } from '../exame.service';
import { listaRotas } from 'src/app/utils/listaRotas';

@Component({
  selector: 'app-create-exame',
  templateUrl: './create-exame.component.html',
  styleUrls: ['./create-exame.component.scss']
})

export class CreateExameComponent implements OnInit {

  exame: Exame = new Exame();
  submitted = false;

  constructor(
    private exameService: ExameService,
    private router: Router, public toastService: ToastService,
    private exameList: ExameListComponent) { }

  ngOnInit() {
  }

  public newExame(): void {
    this.submitted = false;
    this.exame = new Exame();
  }

  public salvar() {
    console.log(this.exame);
    const errosLog: string[] = this.validarCampos();
    if (errosLog.length === 0) {
      this.exameService.createExame(this.exame)
        .subscribe(data => {
          console.log(data);
          this.toastService.sucesso('Exame cadastrado com sucesso');
          this.listar();
          this.exameList.fecharModal();
        }, error => {
          console.log(error);
          this.toastService.erro(error.error);
        });
    } else {
      this.toastService.dispararToastsErro(...errosLog);
    }
  }

  private validarCampos() {
    const errosLog: string[] = [];
    if (this.exame.nome == null || this.exame.nome === '') {
      errosLog.push('campo nome não pode estar vazio');
    }
    if (this.exame.quantidadeVagas === null) {
      errosLog.push('campo Quantidade de vagas não pode estar vazio');
    }
    if (this.exame.quantidadeVagas <= 0) {
      errosLog.push('campo Quantidade de vagas não pode ser menor que 1');
    }
    return errosLog;
  }

  public onSubmit() {
    this.submitted = true;
    this.salvar();
  }

  public listar() {
    this.router.navigate([listaRotas.exameList]);
  }
}
