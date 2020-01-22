import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from '../../_services/toast.service';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.component.html',
  styleUrls: ['./candidato-list.component.scss']
})
export class CandidatoListComponent implements OnInit {
  candidatos: Observable<Candidato[]>;
  modal: boolean;
  modalDeletar: boolean;
  searchText: string ;
  candidato: Candidato;
  constructor(
    private candidatoService: CandidatoService,
    public toastService: ToastService) { }

  ngOnInit() {
    this.carregarCandidatos();
  }

  public carregarCandidatos() {
    this.candidatos = this.candidatoService.getCandidatosList();
  }

  abrirModal() {
    this.modal = true;
  }


  abrirModalDeletar(candidato: Candidato) {
    this.candidato = candidato;
    this.modalDeletar = true;
  }
  public deletar(candidato: Candidato) {
    this.candidatoService.deleteCandidato(candidato.id)
      .subscribe(
        data => {
          console.log(data);
          this.toastService.padrao('Candidato removido');
          this.carregarCandidatos();
          this.fecharModal();
        },
        error => {
          console.log(error);
          this.toastService.erro(error.error);
        });
  }

  fecharModal() {
    this.carregarCandidatos();
    this.modal = false;
    this.modalDeletar = false;
  }
}
