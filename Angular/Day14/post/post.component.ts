import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    post:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPost();
  }

  GetPost(){
    this.service.getPostData()
    .subscribe((myresponse:any)=>{
      console.log(myresponse);
      this.post=myresponse;
    })
  }

  onSend(mytitle:any,mybody:any){

      let obj={
        title:mytitle,
        body:mybody
      }

      this.service.PostData(obj)
      .subscribe((response)=>{
        console.log(response);
      })

  }

}
