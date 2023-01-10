import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  
  public taskList: Array<TaskList> = [
    {task: "Minh nova Task", checked: true},
    {task: "Minh nova Task 2", checked: false},
  ]

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente DELETAR todos os itens?")
    if (confirm) {
      this.taskList = []
    }
  }

  constructor() {}

  ngOnInit(): void {
  }
}
