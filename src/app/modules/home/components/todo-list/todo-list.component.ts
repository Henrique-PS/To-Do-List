import { Component, DoCheck} from '@angular/core';
import { first, last } from 'rxjs';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{


  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente DELETAR todos os itens?")
    if (confirm) {
      this.taskList = []
    }
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm('Task está vazia, deseja DELETA-LA?')

      if (confirm) {
        this.deleteItemTaskList(index)
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked)) // sort(): um método que ordena um array, onde quando o retorno do método é -1 o array é ordenado de forma crescente e quando é 1 é ordenado de forma crescente. Nesse caso o atributo checked é booleano e está sendo convertido para número (ou seja, 0 ou 1), então o método está ordenando pelo valor do checked 
      localStorage.setItem('list', JSON.stringify(this.taskList)) // setItem: recebe uma chave e um valor como parâmetros
    }
  }
}
