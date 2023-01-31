import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string="U r study angular 12 module...";

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  myMsg:string='';

  ChildStrData:string='';

  ChildArrData:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  onSendMsg(msg:string){
      this.myMsg=msg;
  }

}
