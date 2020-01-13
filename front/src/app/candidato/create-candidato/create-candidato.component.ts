import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../_services/toast.service';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { listaRotas } from 'src/app/utils/listaRotas';


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

    let errosLog: string[] = this.validarCampos();
    if (errosLog.length === 0) {
    this.candidatoService.createCandidato(this.candidato)
      .subscribe(data => {
        console.log(data);
        this.toastService.sucesso('Candidato cadastrado com sucesso');
        this.refresh();
        this.candidato = new Candidato();
      },
        error => {
          console.log(error);
          this.toastService.erro(error.error);
        });
      }else{
        this.mensagemErro(...errosLog);
      }

  }

  validarCampos(){
    let errosLog: string[] = [];
    if (this.candidato.nome == null) {
      errosLog.push("campo nome não pode estar vazio");
    }
    if (this.candidato.cidade == null) {
      errosLog.push("campo cidade não pode estar vazio");
    }
    return errosLog;
  }

  mensagemErro(...mensagem: string[]) {
    mensagem.forEach(m => this.toastService.erro(m));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  refresh() {
    this.router.navigate([listaRotas.candidatoAdd]);
  }

  goToList() {
    this.router.navigate([listaRotas.candidatoLista]);
  }
}