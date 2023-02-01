import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public name: string = "Gustavo"
  public idade: Number = 25
  public resposta: string = ''


  constructor() {}

  ngOnInit(): void {// RETORNA TODA AS VEZES QUE CARREGAR A PÁGINA
    if (this.idade > 29 ) {
      this.resposta = 'Sim'
    }else{
      this.resposta = 'Não'
    };
  }

}
