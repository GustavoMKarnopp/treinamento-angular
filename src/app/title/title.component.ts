import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit{ //OnInit, trata-se do ciclo de vida do algular
  public title: string = 'Thomas Karnopp'
constructor(){}

  ngOnInit(): void {
    
  }
}
