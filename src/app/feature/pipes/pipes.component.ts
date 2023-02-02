import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  upperName : string = 'This is a Uppercase Pipes'
  lowerName :string = 'This is a Lowercase Pipes'
  titleName :string = 'This is a Titlecase Pipes'
  num1: number = 100;
  pi: number = 3.14159265359;
  num2:number = 10000;
  percent : number=1.25634;
  date : Date =new Date()

}
