import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy{ //OnInit, trata-se do ciclo de vida do algular
  @Input() public title: string = 'Thomas Karnopp'
constructor(){}

  ngOnInit(): void {
    
  }
  // ngOnChanges UTILIZAMOS PARA QUANDO RECEBEMOS VALOR DE FORA POR EXEMPLO EM UM INPUT
  ngOnChanges(): void {
    console.log('RECEBEU UM VALOR DE FORA!')
  }
  ngOnDestroy(): void {
    console.log('FOI DESTRUIDO!', 'AVISA QUANDO O COMPONENTE FOI DESTRUIDO')
    //PODEMOS UTILIZA-LO PARA QUE QUANDO FORMOS FAZER UMA ACAO DE DESTRUIR,
    // PODEMOS PASSAR UMA MENSAGEM QUESTIONANDO SE É EXATAMENTE ISTO, TIPO UM POPUP
  }
}
