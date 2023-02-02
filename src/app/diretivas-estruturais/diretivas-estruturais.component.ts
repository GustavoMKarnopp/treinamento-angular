import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{
  public condition : boolean = true
  public publicCondition : boolean = true

  ngOnInit(): void{

    setInterval(() => {
      this.condition = !this.condition
    }, 2000)
  }

  public onClick(){
    this.publicCondition = !this.publicCondition
  }

}
