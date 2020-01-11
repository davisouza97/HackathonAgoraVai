import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../_services/toast.service';
import { Exame } from '../exame';
import { ExameService } from '../exame.service';

@Component({
  selector: 'app-create-exame',
  templateUrl: './create-exame.component.html',
  styleUrls: ['./create-exame.component.scss']
})

export class CreateExameComponent implements OnInit {

  exame: Exame = new Exame();
  submitted = false;

  constructor(private exameService: ExameService,
    private router: Router, public toastService: ToastService) { }

  ngOnInit() {
  }

  newExame(): void {
    this.submitted = false;
    this.exame = new Exame();
  }

  save() {
    console.log(this.exame);
    this.exameService.createExame(this.exame)
      .subscribe(data => {
        console.log(data);
        this.toastService.sucesso('Exame cadastrado com sucesso');
        this.gotoList();
      }, error => {
        console.log(error);
        this.toastService.erro(error.error);
      });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/exames']);
  }
}