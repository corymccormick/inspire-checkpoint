export default class Todo {
  constructor({ completed, description, user, id }) {
    this.completed = completed
    this.description = description
    this.user = user
    this.id = id
  }
  get Template() {
    return `
    <li>
    <input class="form-check-input" type="checkbox"onchange ="app.todoController.updateTodo('${this.id}')" ${this.completed ? "checked" : ""}>
    <label class="form-check-label">
     ${this.description}
     </label>
     <i class="fas fa-times ml-2" onclick="app.todoController.removeTodo('${this.id}')"></i>
     </div>
    </li>
   `
  }
}