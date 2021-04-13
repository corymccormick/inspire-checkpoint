import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


function drawTodo() {
  console.log(ProxyState.todo.length);
  // get uncompleteCount() {
  let it = ProxyState.todo.filter(i => !i.completed)
  // return it.length
  console.log(it.length)
  let template = ''
  ProxyState.todo.forEach(td => {
    template += td.Template
  })
  document.getElementById('todo').innerHTML = template
  document.getElementById('complete').innerHTML = `<div> it.length / ProxyState.todo.length </div>`

}
export default class TodoController {
  constructor() {
    ProxyState.on("todo", drawTodo)
    this.getTodo()
  }
  getTodo() {
    todoService.getTodo()
  }

  addTodo() {
    window.event.preventDefault()
    let form = window.event.target
    let createTodo = {
      description: form['description'].value,
    }

    todoService.addTodo(createTodo)
    form.reset()
    // form event make new object * jepordy-player controller
  }

  updateTodo(id) {
    todoService.updateTodo(id)
  }



  removeTodo(id) {
    todoService.removeTodo(id)

  }
}