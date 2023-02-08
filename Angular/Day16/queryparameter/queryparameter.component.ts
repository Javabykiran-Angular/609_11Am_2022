import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

    
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetdataFromUrl();
  }
  GetdataFromUrl(){
      
  }

}
