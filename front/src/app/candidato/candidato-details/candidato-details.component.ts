import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from "../candidato";
import { CandidatoListComponent } from '../candidato-list/candidato-list.component';
import { CandidatoService } from "../candidato.service";

@Component({
  selector: 'app-candidato-details',
  templateUrl: './candidato-details.component.html',
  styleUrls: ['./candidato-details.component.scss']
})
export class CandidatoDetailsComponent implements OnInit {

  id: number;
  candidato: Candidato;

  constructor(private route: ActivatedRoute, private router: Router,
    private candidatoService: CandidatoService,
    private candidatoList: CandidatoListComponent) { }

  ngOnInit() {
    this.candidato = new Candidato();

    this.id = this.route.snapshot.params['id'];

    this.candidatoService.getCandidato(this.id)
      .subscribe(data => {
        this.candidato = { ...data.body };
      }, error => console.log(error));
  }

  public listar() {
    this.candidatoList.fecharModal();
  }
}