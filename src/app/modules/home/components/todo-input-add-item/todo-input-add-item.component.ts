import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-item',
  templateUrl: './todo-input-add-item.component.html',
  styleUrls: ['./todo-input-add-item.component.scss']
})
export class TodoInputAddItemComponent implements OnInit{

  @Output() public emitItemTaskList = new EventEmitter()

  public addItemTaskList: string = ''

  constructor() {}

  ngOnInit(): void {

  }
  
  public submmitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim() // trim(): retira todos os espaços da string que não sejam seguidos de outra string

   if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList)
      this.addItemTaskList = ''
   }
  }

}
