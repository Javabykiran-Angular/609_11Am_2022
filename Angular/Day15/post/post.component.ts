import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    post:any[]=[];
    id:number=0;
    title:string='';
    body:string='';
    ishidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPost();
  }

  GetPost(){
    this.service.getPostData()
    .subscribe((myresponse:any)=>{
      console.log(myresponse);
      this.post=myresponse;

    },(myerror)=>{
      alert("Error Occured....");
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

  onEdit(item:any){
    // console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.ishidden=false;
  }

  onupdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.Updatedata(obj)
    .subscribe((response)=>{
      console.log(response);
      this.ishidden=true;
    })

  }

  onDelete(id:any){
    this.service.Deletedata(id)
    .subscribe((response)=>{
      console.log(response)
      alert("Record Deleted successufully");
    })
  }

}
