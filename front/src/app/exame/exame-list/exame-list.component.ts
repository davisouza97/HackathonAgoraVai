import { Observable } from 'rxjs';
import { ExameService } from '../exame.service';
import { Exame } from '../exame';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../_services/toast.service';
import { listaRotas } from 'src/app/utils/listaRotas';

@Component({
  selector: 'app-exame-list',
  templateUrl: './exame-list.component.html',
  styleUrls: ['./exame-list.component.scss']
})
export class ExameListComponent implements OnInit {
  exames: Observable<Exame[]>;
  exame: Exame;
  modal: boolean;
  modalDeletar: boolean;
  constructor(
    private exameService: ExameService,
    private router: Router,
    public toastService: ToastService) { }

  ngOnInit() {
    this.carregarExames();
  }

  public carregarExames() {
    this.exames = this.exameService.getExamesList();
  }

  abrirModal() {
    this.modal = true;
  }

  public modalDelete(exame: Exame) {
    this.modalDeletar = true;
    this.exame = exame;
  }

  public fecharModal() {
    this.modalDeletar = false;
    this.modal = false;
    this.carregarExames();
  }

  public deletar(idExame: number) {
    this.exameService.deleteExame(idExame)
      .subscribe(
        data => {
          console.log(data);
          this.carregarExames();
          this.toastService.padrao('Exame removido');
          this.fecharModal();
        },
        error => {
          console.log(error);
          this.toastService.erro(error.error);
        });
  }

  public detalharExame(id: number) {
    this.router.navigate([listaRotas.exameDetalhes, id]);
  }

  public alterarExame(id: number) {
    this.router.navigate([listaRotas.exameEditar, id]);
  }
}
