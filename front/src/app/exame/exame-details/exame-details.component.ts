import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { listaRotas } from 'src/app/utils/listaRotas';
import { Inscricao } from '../../inscricao/Inscricao';
import { InscricaoService } from '../../inscricao/inscricao.service';
import { ToastService } from '../../_services/toast.service';
import { Exame } from "../exame";
import { ExameService } from "../exame.service";


@Component({
  selector: 'app-exame-details',
  templateUrl: './exame-details.component.html',
  styleUrls: ['./exame-details.component.scss']
})
export class ExameDetailsComponent implements OnInit {

  id: number;
  exame: Exame;
  inscricoes: Observable<Inscricao[]>;
  inscricao: Inscricao;
  modal: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private exameService: ExameService, private inscricaoService: InscricaoService, public toastService: ToastService) { }

  ngOnInit() {
    this.exame = new Exame();

    this.id = this.route.snapshot.params['id'];

    this.exameService.getExame(this.id)
      .subscribe(data => {
        console.log(data)
        this.exame = { ...data.body };
        this.reloadData();
      }, error => console.log(error));

  }

  public reloadData() {
    this.inscricoes = this.exameService.getAprovadosExame(this.id);
  }

  public adicionarNota(inscricao: Inscricao) {
    let erroLog: string[] = this.validarNota(inscricao);
    if (erroLog.length === 0) {
      this.inscricaoService.updateInscricao(inscricao).subscribe(() => {
        this.toastService.sucesso('Nota alterada/cadastrada com sucesso');
        this.modal = false;
      });
    } else {
      this.mensagemErro(...erroLog);
    }
  }

  private mensagemErro(...mensagem: string[]) {
    mensagem.forEach(m => this.toastService.erro(m));
  }

  private validarNota(inscricao: Inscricao) {
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

  public exibirModal(inscricao: Inscricao) {
    this.inscricao = inscricao;
    this.modal = !this.modal;
  }

  public listar() {
    this.router.navigate([listaRotas.exameList]);
  }
}