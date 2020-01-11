import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../_services/toast.service';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';


@Component({
  selector: 'app-create-candidato',
  templateUrl: './create-candidato.component.html',
  styleUrls: ['./create-candidato.component.scss']
})
export class CreateCandidatoComponent implements OnInit {

  candidato: Candidato = new Candidato();
  submitted = false;

  constructor(private candidatoService: CandidatoService,
    private router: Router, public toastService: ToastService) { }

  ngOnInit() {
  }

  newCandidato(): void {
    this.submitted = false;
    this.candidato = new Candidato();
  }

  save() {
    this.candidatoService.createCandidato(this.candidato)
      .subscribe(data => {
        console.log(data);
        this.toastService.sucesso('Candidato cadastrado com sucesso');
        this.gotoList();
        this.candidato = new Candidato();
      },
        error => {
          console.log(error);
          this.toastService.erro(error.error);
        });


  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/candidatos']);
  }
}