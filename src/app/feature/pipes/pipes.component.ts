import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface user {
  id: number;
  name: string;
  stream: string;
  description: string;
}

export interface dummyStr{
  text:string
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  upperName: string = 'This is a Uppercase Pipes';
  lowerName: string = 'This is a Lowercase Pipes';
  titleName: string = 'This is a Titlecase Pipes';
  num1: number = 100;
  pi: number = 3.14159265359;
  num2: number = 10000;
  percent: number = 1.25634;
  date: Date = new Date();

  search: any;
  num!: number;
  power!: number;
  boldWord: any;
  ellipsis!: number;
  ellipStr: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit';

  dummyStrArr:dummyStr[]=[
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      text: 'Cras porta risus eu vulputate maximus.'
    },
    {
      text: 'Quisque sed lorem tincidunt, accumsan ex sit amet, hendrerit neque.'
    },
  ]
  
  userData: user[] = [
    {
      id: 1,
      name: 'Dharmik',
      stream: 'BCA',
      description: 'Good',
    },
    {
      id: 2,
      name: 'Pratik',
      stream: 'BA',
      description: 'Better',
    },
    {
      id: 3,
      name: 'Jaydeepa',
      stream: 'BCom',
      description: 'Extream',
    },
    {
      id: 4,
      name: 'Vishal',
      stream: 'BBA',
      description: 'Cooling',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  totalstudent: any = new Observable((obj) => {
    obj.next(this.userData.length);
  });
}
