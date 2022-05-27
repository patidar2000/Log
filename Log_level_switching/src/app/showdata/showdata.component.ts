import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTestComponent } from '../dialog-test/dialog-test.component';
import { ServicesService } from '../services.service';
// import { Console } from 'console';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  dataa:any;
  data1:any;
  status="info"

  constructor(private servicess:ServicesService,public dialog: MatDialog) { }
  
  
  ngOnInit(): void {  }

  openDialog(response:any) {
  console.log(response)
    this.dialog.open(DialogTestComponent,{data:{"msg":response}});
  }

  
  
  show(){
    
    this.servicess.showgetDetails().subscribe(
      (data)=>{
        this.dataa=data;
        console.log("data",data)
        this.openDialog(data);
      },
      (error)=>{
        console.log("error",error);
      });

  }

  showError(){
    

    this.servicess.showErrorDetails().subscribe(
      (data)=>{
        this.data1=data;
        console.log("data",data)
        this.openDialog(data);
      },
      (error)=>{
        console.log("error",error);
      });
  }

  showInfo(){
    
    this.servicess.showInfoDetails().subscribe(
      (data)=>{
        this.data1=data;
        console.log("data",data)
        this.openDialog(data);
      },
      (error)=>{
        console.log("error",error);
      });

  }

  showWarn(){
    
    this.servicess.showWarnDetails().subscribe(
      (data)=>{
        this.data1=data;
        console.log("data",data)
        this.openDialog(data);
      },
      (error)=>{
        console.log("error",error);
      });

  }

  showDebug(){
    
    this.servicess.showDebugDetails().subscribe(
      (data)=>{
        this.data1=data;
        console.log("data",data)
        this.openDialog(data);
      },
      (error)=>{
        console.log("error",error);
      });

  }

  showTrace(){
    
    this.servicess.showTraceDetails().subscribe(
      (data)=>{
        this.data1=data;
        console.log("data",data)
        this.openDialog(data);
      },
      (error)=>{
        console.log("error",error);
      });

  }

  showOff(){
    
    this.servicess.showOffDetails().subscribe(
      (data)=>{
        this.data1=data;
        console.log("data",data)
        this.openDialog(data);
      },
      (error)=>{
        console.log("error",error);
      });

  }
   

}


