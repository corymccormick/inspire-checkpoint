import { ProxyState } from "../AppState.js";
import Clock from "../Models/Clock.js";

class ClockService {
  getTime() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    ProxyState.clock = new Clock(currentHours, currentMinutes)
  }



}
export const clockService = new ClockService();