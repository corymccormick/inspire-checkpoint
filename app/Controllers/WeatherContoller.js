import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function drawWeather() {
  let weather = ProxyState.weather
  document.getElementById('weather').innerHTML = weather.Template

}

export default class WeatherContoller {

  constructor() {
    ProxyState.on("weather", drawWeather)
    ProxyState.on("tempscale", drawWeather)
    this.getWeather()
    this.toggleTempScale()

  }

  getWeather() {
    weatherService.getWeather()
  }

  toggleTempScale() {
    weatherService.toggleTempScale()
  }

}