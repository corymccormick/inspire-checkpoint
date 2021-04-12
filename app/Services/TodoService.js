import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";

class TodoService {

  async addTodo() {
    let res = await sandboxApi.post(cory / todos, ProxyState.todo)
    ProxyState.todo = [...ProxyState.todo, new todo(res.data)]
  }

  async removeTodo(id) {
    await sandboxApi.delete("cory/todos/" + id)
    ProxyState.todo = ProxyState.todo.filter(todo => todo._id != id)
  }

  async getTodo() {
    let res = await sandboxApi.get("cory/todos")
    ProxyState.todo = res.data.map(td => new Todo(td))
  }
}
export const todoService = new TodoService();