import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    let res = await sandboxApi.get('weather')
    ProxyState.weather = new Weather(res.data)
  }

  toFahrenheit(weather) {
    farhenheit = parseFloat(weather);
    ((weather - 273.15) * 1.8) + 32;
    ProxyState.temperatureScale = weather.farhenheit;
  }



}
export const weatherService = new WeatherService();