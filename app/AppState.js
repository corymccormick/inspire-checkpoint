import Image from "./Models/Image.js";
import Quote from "./Models/Quote.js";
import Weather from "./Models/Weather.js";
import Todo from "./Models/Todo.js"
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  /** @type {Image} */
  image = null

  /**@type {Quote} */
  quote = null

  /**@type {Weather} */
  weather = null

  tempscale = "f"

  /**@type {Clock} */
  clock = null

  /**@type {Todo[]} */
  todo = []





}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
