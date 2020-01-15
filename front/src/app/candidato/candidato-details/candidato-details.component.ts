import { CandidatoService } from "../candidato.service";
import { Candidato } from "../candidato";
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { listaRotas } from 'src/app/utils/listaRotas';

@Component({
  selector: 'app-candidato-details',
  templateUrl: './candidato-details.component.html',
  styleUrls: ['./candidato-details.component.scss']
})
export class CandidatoDetailsComponent implements OnInit {

  id: number;
  candidato: Candidato;

  constructor(private route: ActivatedRoute, private router: Router,
    private candidatoService: CandidatoService) { }

  ngOnInit() {
    this.candidato = new Candidato();

    this.id = this.route.snapshot.params['id'];

    this.candidatoService.getCandidato(this.id)
      .subscribe(data => {
        console.log(data)
        this.candidato = { ...data.body };
      }, error => console.log(error));
  }

  public list() {
    this.router.navigate([listaRotas.candidatoLista]);
  }
}