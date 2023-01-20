import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-title title="Olá GUS"></app-title>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  //VOID CARACTERIZA QUE NÃO TERA NENHUM RETORNO
  ngOnInit(): void{
    console.log(1)
  }
}
