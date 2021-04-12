export default class Todo {
  constructor({ completed, description, user, id }) {
    this.completed = completed
    this.description = description
    this.user = user
    this.id = id
  }
  get Template() {
    return `
   <div class="col-4">
   
     <div>
     <i class="fas fa-times ml-2" onclick="app.todoController.deleteItem('${this.id}')"></i>
     </div>
   `
  }
}