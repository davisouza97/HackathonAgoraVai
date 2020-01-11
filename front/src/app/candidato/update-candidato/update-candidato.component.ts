import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-update-candidato',
  templateUrl: './update-candidato.component.html',
  styleUrls: ['./update-candidato.component.scss']
})
export class UpdateCandidatoComponent implements OnInit {

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
        this.candidato = { ... data.body };
      }, error => console.log(error));
  }

  updatecandidato() {
    this.candidatoService.updateCandidato(this.id, this.candidato)
      .subscribe(data => {
        console.log(data);
        this.gotoList();
      }, error => console.log(error));
    this.candidato = new Candidato();
  }

  onSubmit() {
    this.updatecandidato();
  }

  gotoList() {
    this.router.navigate(['/candidatos']);
  }
}