import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


function drawTodo() {
  let template = ''
  ProxyState.todo.forEach(td => {
    template += /*html*/`<li class="cursor" onclick="app.todoController.getTodo('${td.id}')">${td.description}</li>`
  })
  document.getElementById('todo').innerHTML = template

}
export default class TodoController {
  constructor() {
    ProxyState.on("todo", drawTodo)
    this.getTodo()
  }
  getTodo() {
    todoService.getTodo()
  }

  addtodo() {
    todoService.addTodo()
  }

  removeTodo(id) {
    todoService.removeTodo(id)

  }
}