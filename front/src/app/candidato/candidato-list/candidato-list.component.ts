import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Candidato } from "../candidato";
import { CandidatoService } from "../candidato.service";
import { ToastService } from '../../_services/toast.service';
import { listaRotas } from 'src/app/utils/listaRotas';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.component.html',
  styleUrls: ['./candidato-list.component.scss']
})
export class CandidatoListComponent implements OnInit {
  candidatos: Observable<Candidato[]>;

  constructor(private candidatoService: CandidatoService,
    private router: Router, public toastService: ToastService) { }

  ngOnInit() {
    this.recarregar();
  }

  public recarregar() {
    this.candidatos = this.candidatoService.getCandidatosList();
  }

  public deletar(idCandidato: number) {
    this.candidatoService.deleteCandidato(idCandidato)
      .subscribe(
        data => {
          console.log(data);
          this.toastService.padrao('Candidato removido');
          this.recarregar();
        },
        error => {
          console.log(error);
          this.toastService.erro(error.error)
        });
  }

  public detalhes(idCandidato: number) {
    this.router.navigate([listaRotas.candidatoDetalhes, idCandidato]);
  }

  public alterar(idCandidato: number) {
    this.router.navigate([listaRotas.candidatoEditar, idCandidato]);
  }
}