export default class {
  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.description = data.weather[0].description



  }

  get Template() {
    return `
    <div>
<h4> ${this.temp} <br> ${this.description} <br> ${this.name} </h4>
</div>
  `
  }
}