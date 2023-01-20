import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{valor}}
    <button (click)="adicionar()" >Adicionar</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterViewChecked, AfterContentInit, AfterViewInit, AfterContentChecked{
  public valor: number = 1;
  
  constructor() {}

  public adicionar(): number{
     return this.valor += 1
  }

  //VOID CARACTERIZA QUE NÃO TERA NENHUM RETORNO
  ngOnInit(): void{
  }
  ngDoCheck(): void{
    console.log('ngDoCheck', 'ESTARÁ SEMPRE VERIFICANDO SE HOUVE ALGUMA ALTERACAO')
  }
  ngAfterContentInit(): void{
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void{
    console.log('ngAfterViewInit', 'ASSIM QUE CARREGAR TODA A PÁGINA ELE CHAMA A FUNCAO')
  }
  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked')
  }
}
