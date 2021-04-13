export default class {
  constructor(data, displayTemp) {
    this.name = data.name
    this.temp = data.main.temp
    this.description = data.weather[0].description
    this.displayTemp = displayTemp
    this.fahrenheit = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32)





  }

  get Template() {
    return `
    <div class="col text-right" >
    <h4> ${this.fahrenheit} <br> ${this.description} <br> ${this.name} </h4>
    </div>
    `
  }
  // write function that will return f or c
}