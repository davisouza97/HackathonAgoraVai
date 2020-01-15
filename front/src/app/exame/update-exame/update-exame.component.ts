import { InscricaoService } from './../../inscricao/inscricao.service';
import { Inscricao } from './../../inscricao/Inscricao';
import { Component, OnInit } from '@angular/core';
import { Exame } from '../exame';
import { ActivatedRoute, Router } from '@angular/router';
import { ExameService } from '../exame.service';
import { ToastService } from '../../_services/toast.service';
import { listaRotas } from 'src/app/utils/listaRotas';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-exame',
  templateUrl: './update-exame.component.html',
  styleUrls: ['./update-exame.component.scss']
})
export class UpdateExameComponent implements OnInit {

  id: number;
  exame: Exame;
  inscricoes: Observable<Inscricao[]>;
  inscricao: Inscricao = new Inscricao();
  modal: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private exameService: ExameService, public toastService: ToastService,
    private inscricaoService: InscricaoService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.exameService.getExame(this.id)
      .subscribe(data => {
        console.log(data);
        this.exame = { ...data.body };
        this.inscricoes = this.exameService.getInscricoesExame(this.id);
      }, error => console.log(error));
  }

  updateExame() {
    let errosLog: string[] = this.validarCampos();
    if (errosLog.length === 0) {
      this.exameService.updateExame(this.id, this.exame)
        .subscribe(data => {
          console.log(data);
          this.toastService.sucesso('Exame alterado com sucesso');
          this.gotoList();
        }, error => {
          console.log(error);
          this.toastService.erro(error.error);
        });
    } else {
      this.mensagemErro(...errosLog);
    }
  }

  mostrarModal(inscricao: Inscricao) {
    this.inscricao = inscricao;
    this.modal = !this.modal;
  }

  adicionarNota(inscricao: Inscricao){
    console.log(inscricao);
    let erroLog: string[] = this.verificarNota(inscricao);
    if (erroLog.length === 0) {
      this.inscricaoService.updateInscricao(inscricao).subscribe();
      this.toastService.sucesso('Nota alterada/cadastrada com sucesso')
      this.modal = false;
    } else {
      this.mensagemErro(...erroLog);
    }
  }

  verificarNota(inscricao: Inscricao) {
    let erroLog: string[] = [];
    if (inscricao.nota > 100) {
      erroLog.push("Nota não pode ser maior que 100");
    }
    if (inscricao.nota < 0) {
      erroLog.push("Nota não pode ser menor que 0");
    }
    if (inscricao.nota === null) {
      erroLog.push("Campo nota não pode estar vazia");
    }
    return erroLog;
  }

  fecharModal() {
    this.modal = false;
    this.inscricoes = this.exameService.getInscricoesExame(this.id);
  }

  validarCampos() {
    let errosLog: string[] = [];
    if (this.exame.nome == null || this.exame.nome == "") {
      errosLog.push("campo nome não pode estar vazio");
    }
    console.log(this.exame.quantidadeVagas)
    if (this.exame.quantidadeVagas == null) {
      errosLog.push("campo Quantidade de vagas não pode estar vazio");
    }
    if (this.exame.quantidadeVagas <= 0) {
      errosLog.push("campo Quantidade de vagas não pode ser menor que 1");
    }
    return errosLog;
  }

  mensagemErro(...mensagem: string[]) {
    mensagem.forEach(m => this.toastService.erro(m, 3000));
  }

  onSubmit() {
    this.updateExame();
  }

  gotoList() {
    this.router.navigate([listaRotas.exameList]);
  }
}