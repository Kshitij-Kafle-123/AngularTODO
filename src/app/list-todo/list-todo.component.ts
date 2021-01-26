import { Component, OnInit } from '@angular/core';

export class Todo{
constructor(
  public id:number,
  public description: string,
  public done: boolean,
  public targetDate: Date
){

}
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
todos=[
  new Todo(1, 'learn angular', false, new Date()),
  new Todo(2, 'learn JPA & H2', false, new Date()),
  new Todo(3, 'learn blockchain', false, new Date()),
  new Todo(4, 'learn spring', true, new Date())
]
todo={
  id:1,
  description:'learn'
}

  constructor() { }

  ngOnInit() {
  }

}
