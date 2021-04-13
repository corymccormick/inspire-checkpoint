import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";

class TodoService {

  async addTodo(createTodo) {
    let res = await sandboxApi.post("cory/todos", createTodo)
    ProxyState.todo = [...ProxyState.todo, new Todo(res.data)]
  }

  async removeTodo(id) {
    await sandboxApi.delete("cory/todos/" + id)
    ProxyState.todo = ProxyState.todo.filter(todo => todo.id != id)
  }

  async updateTodo(id) {
    const foundIndex = ProxyState.todo.findIndex(todo => todo.id === id)
    let res = await sandboxApi.put("cory/todos/" + id, { "completed": !ProxyState.todo[foundIndex].completed })
    ProxyState.todo[foundIndex] = new Todo(res.data)
    ProxyState.todo = ProxyState.todo

  }


  async getTodo() {
    let res = await sandboxApi.get("cory/todos")
    ProxyState.todo = res.data.map(td => new Todo(td))
  }
}
export const todoService = new TodoService();