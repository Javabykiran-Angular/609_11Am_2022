import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

    course:string[]=['Core Java','Advnaced java','Spring Boot','JSP','Angular 12','Jenking','Docker','AWS'];

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

    selected:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(myitem:any){
    console.log("===== Mouse over event occur =====")
    // console.log(myitem)
    this.selected=myitem.name;
  }

  onMouseOut(){
    console.log("----- Mouse out Event Occur-------")
    this.selected='';
  }

}
