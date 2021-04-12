export default class {
  constructor(data, displayTemp) {
    this.name = data.name
    this.temp = data.main.temp
    this.description = data.weather[0].description
    this.displayTemp = displayTemp




  }

  get Template() {
    return `
    <div class="col text-right" >
    <h4> ${this.temp} <br> ${this.description} <br> ${this.name} </h4>
    </div>
    `
  }
}