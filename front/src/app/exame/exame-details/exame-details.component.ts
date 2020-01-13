import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { Inscricao } from '../../inscricao/Inscricao';
import { InscricaoService } from '../../inscricao/inscricao.service';
import { InscricaoKey } from '../../inscricao/InscricaoKey';
import { ToastService } from '../../_services/toast.service';
import { Exame } from "../exame";
import { ExameService } from "../exame.service";
import { listaRotas } from 'src/app/utils/listaRotas';


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
  inscricaoKey: InscricaoKey;
  modal: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private exameService: ExameService, private inscricaoService: InscricaoService, 
    public toastService: ToastService) { }

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

  reloadData() {
    this.inscricoes = this.exameService.getInscricoesExame(this.id);
  }

  removeInscricao(id: number) {
    this.inscricaoService.deleteInscricao(id, this.exame.id).subscribe(() => this.reloadData());
    this.toastService.padrao('Inscrição removida')
  }

  adicionaNota(inscricao: Inscricao) {
    console.log(inscricao);
    this.inscricaoService.updateInscricao(inscricao).subscribe();
    this.toastService.sucesso('Nota alterada/cadastrada com sucesso')
    this.modal = false;
    debugger;
  }

  exibirModal(inscricao: Inscricao) {
    this.inscricao = inscricao;
    this.modal = !this.modal;
    debugger
  }

  list() {
    this.router.navigate([listaRotas.exameList]);
  }
}