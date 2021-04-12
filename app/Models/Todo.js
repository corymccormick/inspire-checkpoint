export default class Todo {
  constructor({ completed, description, user, id }) {
    this.completed = completed
    this.description = description
    this.user = user
    this.id = id
  }
  get Template() {
    return `
    <div class="col-3 d-flex mt-5 mb-3">
    <div class="card rounded">
    <div class="card-header text-left text-light m-0 p-3"">
    <h4>ToDo</h4>
    </div>
    <div class="card-body">
    <div class="p-1">
    <ul>
    <div class="form-check">
    <li>
    <input class="form-check-input" type="checkbox" value="${this.completed}" id="" checked>
    <label class="form-check-label">
     ${this.description}
     </label>
     <i class="fas fa-times ml-2" onclick="app.todoController.removeTodo('${this.id}')"></i>
     </div>
    </li> 
    </ul>
    </div>
    </div>
            
    </div>
  </div>
        </div>
    </div>
  </div>
   `
  }
}