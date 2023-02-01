import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildpipe',
  templateUrl: './inbuildpipe.component.html',
  styleUrls: ['./inbuildpipe.component.css']
})
export class InbuildpipeComponent implements OnInit {

  strdata:string='Hopes so u all are understand Angular 12 Module & enjoying it.';
  num2:number=-452.78956324557;
  mydate=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
