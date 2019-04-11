import { Component } from '@angular/core';
import {myservice} from "./service/service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private result:any;
  constructor(private _services:myservice){}
  ngOnInit(){
    this._services.getData().subscribe((res)=>{
      this.result=res;
    },(err)=>{
      if(err.HttpErrorResponse instanceof Error){
        console.log("server side error")
      }else{
        console.log("client side error")
      }
    })
  }
}
