import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="calculator";
  input:any='';
  msg="";
  clean(){
    this.input='';
  }
  back(){
     this.input=String(this.input).substring(0,this.input.length-1);
  }
  insert(k:any){
    this.input=this.input+k;
    this.msg="";
  }
calculate(){
  try{
    this.input=eval(this.input);
    this.msg="";
  }
  catch (error) {
    this.msg="Invalid expression";
}   
}
}
