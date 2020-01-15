import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoService } from '../candidato.service';
import { listaRotas } from 'src/app/utils/listaRotas';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-update-candidato',
  templateUrl: './update-candidato.component.html',
  styleUrls: ['./update-candidato.component.scss']
})
export class UpdateCandidatoComponent implements OnInit {

  id: number;
  candidato: Candidato;

  constructor(private route: ActivatedRoute, private router: Router,
    private candidatoService: CandidatoService, public toastService: ToastService) { }

  ngOnInit() {
    this.candidato = new Candidato();

    this.id = this.route.snapshot.params['id'];
    this.candidatoService.getCandidato(this.id)
      .subscribe(data => {
        console.log(data)
        this.candidato = { ...data.body };
      }, error => console.log(error));
  }

  updatecandidato() {
    let errosLog: string[] = this.validarCampos();
    if (errosLog.length === 0) {
      this.candidatoService.updateCandidato(this.id, this.candidato)
        .subscribe(resposta => {
          console.log(resposta);
          this.toastService.sucesso('Candidato alterado com sucesso');
          this.goToList();
        }, resposta => console.log(resposta));
      this.candidato = new Candidato();
    } else {
      this.mensagemErro(...errosLog);
    }
  }


  validarCampos() {
    let errosLog: string[] = [];
    if (this.candidato.nome == null || this.candidato.nome == "") {
      errosLog.push("campo nome não pode estar vazio");
    }
    if (this.candidato.cidade == null  || this.candidato.cidade == "") {
      errosLog.push("campo cidade não pode estar vazio");
    }
    return errosLog;
  }

  mensagemErro(...mensagem: string[]) {
    mensagem.forEach(m => this.toastService.erro(m));
  }

  onSubmit() {
    this.updatecandidato();
  }

  goToList() {
    this.router.navigate([listaRotas.candidatoLista]);
  }
}