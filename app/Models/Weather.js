export default class {
  constructor({ data }) {
    this.name = data.name
    this.temp = data.main.temp
    this.description = data.description
    this.icon = data.icon


  }
}