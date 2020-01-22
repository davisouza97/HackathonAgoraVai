import { Component, OnInit } from '@angular/core';
import { Inscricao } from '../Inscricao';
import { Observable } from 'rxjs';
import { InscricaoService } from '../inscricao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscricao-list',
  templateUrl: './inscricao-list.component.html',
  styleUrls: ['./inscricao-list.component.scss']
})
export class InscricaoListComponent implements OnInit {

  inscricoes: Observable<Inscricao[]>;

  constructor(
    private inscricaoService: InscricaoService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.inscricoes = this.inscricaoService.getInscricaoList();
  }

  public inscricaoDetails(id: number) {
    this.router.navigate(['candidatoDetails', id]);
  }

  public updateInscricao(id: number) {
    this.router.navigate(['', id]);
  }
}
