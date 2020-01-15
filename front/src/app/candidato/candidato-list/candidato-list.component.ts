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
    this.reloadData();
  }

  public reloadData() {
    this.candidatos = this.candidatoService.getCandidatosList();
  }

  public deleteCandidato(id: number) {
    this.candidatoService.deleteCandidato(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastService.padrao('Candidato removido');
          this.reloadData();
        },
        error => {
          console.log(error);
          this.toastService.erro(error.error)
        });
  }

  public candidatoDetails(id: number) {
    this.router.navigate([listaRotas.candidatoDetalhes, id]);
  }

  public updateCandidato(id: number) {
    this.router.navigate([listaRotas.candidatoEditar, id]);
  }
}