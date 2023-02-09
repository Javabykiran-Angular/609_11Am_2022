import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  myjson:any={};
    
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetdataFromUrl();
  }
  GetdataFromUrl(){
      this.route.queryParamMap
      .subscribe((param)=>{
        this.myjson.myid=param.get("id");
        this.myjson.myfname=param.get("fname");
        this.myjson.myrole=param.get("role");
      })
  }

}
