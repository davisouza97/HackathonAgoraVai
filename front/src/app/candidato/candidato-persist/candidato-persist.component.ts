import { CandidatoListComponent } from '../candidato-list/candidato-list.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from '../../_services/toast.service';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { listaRotas } from 'src/app/utils/listaRotas';


const ID = 'id';

@Component({
  selector: 'app-create-candidato',
  templateUrl: './candidato-persist.component.html',
  styleUrls: ['./candidato-persist.component.scss']
})
export class CandidatoPersistComponent implements OnInit {

  id: number;
  isEditar: boolean;
  candidato: Candidato = new Candidato();
  submitted = false;

  constructor(
    private candidatoService: CandidatoService,
    private router: Router,
    public toastService: ToastService,
    private route: ActivatedRoute,
    private candidatoList: CandidatoListComponent) { }

  ngOnInit() {
    this.id = this.route.snapshot.params[ID];
    this.isEditar = (this.id !== undefined);
    if (this.isEditar) {
      this.candidatoService.getCandidato(this.id).subscribe(data => {
        this.candidato = { ...data.body };
        console.log(this.candidato);
      }, error => console.log(error));
    }
  }

  public newCandidato() {
    this.submitted = false;
    this.candidato = new Candidato();
  }

  public persistir() {
    const errosLog: string[] = this.validarCampos();
    if (errosLog.length === 0) {
      this.candidatoService.persistirCandidato(this.candidato)
        .subscribe(data => {
          this.toastService.sucesso(`Candidato ${this.isEditar ? 'alterado' : 'cadastrado'} com sucesso.`);
          this.adicionarNovoCandidato();
          this.candidato = new Candidato();
          this.candidatoList.fecharModal();
        },
          error => {
            this.toastService.erro(error.error);
          });
    } else {
      this.toastService.dispararToastsErro(...errosLog);
    }

  }

  public validarCampos() {
    const errosLog: string[] = [];
    if (this.candidato.nome == null || this.candidato.nome === '') {
      errosLog.push('campo nome não pode estar vazio');
    }
    if (this.candidato.cidade == null || this.candidato.cidade === '') {
      errosLog.push('campo cidade não pode estar vazio');
    }
    return errosLog;
  }

  public onSubmit() {
    this.submitted = true;
    this.persistir();
  }

  public adicionarNovoCandidato() {
    this.router.navigate([listaRotas.candidatoAdd]);
  }

  public listar() {
    this.candidatoList.fecharModal();
  }
}
