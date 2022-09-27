import { CommonService } from './common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  currentRow:any;
  users:any;

  color : boolean = false;

  constructor(private service : CommonService){}

  ngOnInit(){
    
    this.getAllUser();
    

  }
  title = 'DateExample';

  colorChange(id:any){
    this.currentRow=id;
    if(!this.color){
      this.color=true;
    }else{
      this.color=false;
    }

  }

  getAllUser(){

    this.service.getAllUsers().subscribe((data)=>{
       this.users=data;
      
      console.log(data)
    },(err)=>{
      alert()
      console.log(err)
    }
    )
  }
}
