import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

    myid1!:number
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetdataFromUrl();
  }

  GetdataFromUrl(){
      this.route.paramMap
      .subscribe((param:any)=>{
        this.myid1=+param.get("id");
      })
  }

}
