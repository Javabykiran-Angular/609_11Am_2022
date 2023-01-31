import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childStrEvent=new EventEmitter();

   @Output() childArrObjEvent=new EventEmitter();

   strData:string='Hopes so u r enjoying the angular 12 module';

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

  onSend(){
    this.childStrEvent.emit(this.strData);
    this.childArrObjEvent.emit(this.arrProduct);
  }

}
