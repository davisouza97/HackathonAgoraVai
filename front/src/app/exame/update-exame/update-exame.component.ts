import { Component, OnInit } from '@angular/core';
import { Exame } from '../exame';
import { ActivatedRoute, Router } from '@angular/router';
import { ExameService } from '../exame.service';
import { ToastService } from '../../_services/toast.service';

@Component({
  selector: 'app-update-exame',
  templateUrl: './update-exame.component.html',
  styleUrls: ['./update-exame.component.scss']
})
export class UpdateExameComponent implements OnInit {

  id: number;
  exame: Exame;

  constructor(private route: ActivatedRoute, private router: Router,
    private exameService: ExameService ,  public toastService: ToastService) { }

  ngOnInit() {
    this.exame = new Exame();

    this.id = this.route.snapshot.params['id'];

    this.exameService.getExame(this.id)
      .subscribe(data => {
        console.log(data);
        this.exame = { ...data.body };
      }, error => console.log(error));
  }

  updateExame() {
    this.exameService.updateExame(this.id, this.exame)
      .subscribe(data => {
        console.log(data);
        this.toastService.show(
          'Exame alterado com sucesso', {
          classname: 'bg-success text-light',
          delay: 2000,
          autohide: true
        });
        this.gotoList();
      }, error => {
        console.log(error);
        this.toastService.show(
          error.error, {
          classname: 'bg-danger text-light',
          delay: 2000,
          autohide: true
        });
      });
  }

  onSubmit() {
    this.updateExame();
  }

  gotoList() {
    this.router.navigate(['/exames']);
  }
}