import { Component, OnInit } from '@angular/core';
import { Exame } from '../exame';
import { ActivatedRoute, Router } from '@angular/router';
import { ExameService } from '../exame.service';
import { ToastService } from '../../_services/toast.service';
import { listaRotas } from 'src/app/utils/listaRotas';
import { Observable } from 'rxjs';
import { Inscricao } from 'src/app/inscricao/Inscricao';
import { InscricaoKey } from 'src/app/inscricao/InscricaoKey';
import { InscricaoService } from 'src/app/inscricao/inscricao.service';

@Component({
  selector: 'app-update-exame',
  templateUrl: './update-exame.component.html',
  styleUrls: ['./update-exame.component.scss']
})
export class UpdateExameComponent implements OnInit {

  id: number;
  exame: Exame = new Exame();
  inscricoes: Observable<Inscricao[]>;
  inscricao: Inscricao;
  inscricaoKey: InscricaoKey;
  modal: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private exameService: ExameService, public toastService: ToastService,
    private inscricaoService: InscricaoService) { }

  ngOnInit() {
    this.exame = new Exame();
    this.id = this.route.snapshot.params['id'];
    this.inscricao = new Inscricao();
    this.exameService.getExame(this.id)
      .subscribe(data => {
        console.log(data);
        this.exame = { ...data.body };
        this.reloadData();
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


  removeInscricao(id: number) {
    this.inscricaoService.deleteInscricao(id,this.exame.id).subscribe(() => this.reloadData());
    this.toastService.padrao('Inscrição removida')
  }
  
  
  reloadData() {
    this.inscricoes = this.exameService.getInscricoesExame(this.id);
  }

  adicionaNota(inscricao: Inscricao){
    console.log(inscricao);
    this.inscricaoService.createInscricao(inscricao).subscribe();
    this.toastService.sucesso('Nota alterada/cadastrada com sucesso')
    this.modal = false;
  }

  exibirModal(inscricao: Inscricao){
    debugger;
    this.inscricao = inscricao;
    debugger;
    this.modal = !this.modal;
  }

  gotoList() {
    this.router.navigate([listaRotas.exameList]);
  }
}