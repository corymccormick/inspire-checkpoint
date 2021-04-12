import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js";

class WeatherService {

  async getWeather() {
    let res = await sandboxApi.get('weather')
    ProxyState.weather = new Weather(res.data)
  }
  toggleTempScale() {
    const isCelsius = ProxyState.tempscale == ("")
    let displayTemp = ProxyState.weather
    if (isCelsius) {
      displayTemp = Math.floor(weather.temp - 273.15)
    } else {
      return displayTemp = Math.floor(isCelsius * (9 / 5) + 32)
    }

  }

  setWeather() {
    ProxyState.weather.displayTemp = getdisplayTemp()
    ProxyState.tempscale = isCelsius ? "c" : "f"
  }




}


//return display temp to use in getweather- res.data,this.getdisplaytemp() to display 


export const weatherService = new WeatherService();