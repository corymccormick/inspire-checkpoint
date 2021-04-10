import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


//Private
function drawQuote() {
  let quote = ProxyState.quote
  document.getElementById('quote').innerHTML = quote.Template
}


//Public
export default class QuotesController {
  constructor() {
    ProxyState.on("quote", drawQuote)
    this.getQuote()
  }
  getQuote() {
    quotesService.getQuote()
  }
}