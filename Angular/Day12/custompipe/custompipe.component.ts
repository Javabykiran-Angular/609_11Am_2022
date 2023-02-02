import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi et, inventore voluptates ratione in assumenda provident tempore deleniti libero nemo atque, ipsam, numquam deserunt alias. Doloribus consectetur eum ab ad.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi et, inventore voluptates ratione in assumenda provident tempore deleniti libero nemo atque, ipsam, numquam deserunt alias. Doloribus consectetur eum ab ad.'
  constructor() { }

  ngOnInit(): void {
  }

}
