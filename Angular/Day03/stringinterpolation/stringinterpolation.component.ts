import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {
  name:string='Sumit raokhande';
  num:number=4;
  imgUrl:string='../../assets/bg2.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
