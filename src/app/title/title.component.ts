import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges{ //OnInit, trata-se do ciclo de vida do algular
  @Input() public title: string = 'Thomas Karnopp'
constructor(){}

  ngOnInit(): void {
    
  }
  // ngOnChanges UTILIZAMOS PARA QUANDO RECEBEMOS VALOR DE FORA POR EXEMPLO EM UM INPUT
  ngOnChanges(): void {
    console.log('RECEBEU UM VALOR DE FORA!')
  }
}
