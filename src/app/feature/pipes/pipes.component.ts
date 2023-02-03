import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  
  totalstudent: any = new Observable((obj) => {
    obj.next(this.userData.length);
  });

  constructor() {}

  ngOnInit(): void {}

  search: any;
  num: any;
  power: any;

  userData: any = [
    {
      id: 1,
      name: 'Dharmik',
      stream: 'BCA',
      description : 'Good'
    },
    {
      id: 2,
      name: 'Pratik',
      stream: 'BA',
      description : 'Better'
    },
    {
      id: 3,
      name: 'Jaydeepa',
      stream: 'BCom',
      description : 'Extream'
    },
    {
      id: 4,
      name: 'Vishal',
      stream: 'BBA',
      description : 'Cooling'
    },
  ];

  upperName: string = 'This is a Uppercase Pipes';
  lowerName: string = 'This is a Lowercase Pipes';
  titleName: string = 'This is a Titlecase Pipes';
  num1: number = 100;
  pi: number = 3.14159265359;
  num2: number = 10000;
  percent: number = 1.25634;
  date: any = new Date();
}
