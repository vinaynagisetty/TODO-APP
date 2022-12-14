import { Component } from '@angular/core';
import {Todo} from "./todo";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO1';
   
  todoValue:string;
  list:Todo[]=[];


  ngOnInit(){
    this.list=[];
    this.todoValue="";
  }
  addItem(){
    if(this.todoValue !==""){
      const newItem:Todo={
        value: this.todoValue,
        isDone: false,
        
      };
      this.list.push(newItem);
    }
    this.todoValue="";
  }

  deleteTodo(index:number): void {
    this.list.splice(index,1);
  }

}
