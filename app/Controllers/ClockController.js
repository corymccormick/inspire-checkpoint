import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";


//Private

function drawClock() {
  let clock = ProxyState.clock
  document.getElementById("clock").innerHTML = clock.Template
}
export default class ClockController {
  constructor() {
    ProxyState.on("clock", drawClock)
    this.getTime()
    setInterval(this.getTime, 1000)
  }

  getTime() {
    clockService.getTime()
  }
}

