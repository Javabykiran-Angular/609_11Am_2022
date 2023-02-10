import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


  arrProduct:any[]=[
    {
      name:"Motorola",
      price:25000,
      qty:1
    },
    {
      name:"OnePlus",
      price:35000,
      qty:1
    },
    {
      name:"Samsung",
      price:20000,
      qty:1
    },
    {
      name:"RealMe",
      price:25000,
      qty:1
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
