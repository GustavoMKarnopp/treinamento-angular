import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <!--UTILIZAMOS DESTA MANEIRA PARA SE FAZER VALIDACOES DENTRO DOS COMPONENTES-->
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponente()">Destruir componente</button>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  public destruir: boolean = true;

  //VOID CARACTERIZA QUE NÃO TERA NENHUM RETORNO
  ngOnInit(): void{
  }

  public destruirComponente() {
    this.destruir = false
  }
}
