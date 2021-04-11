import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js";




class QuotesService {
  //get-appending to base url
  async getQuote() {
    let res = await sandboxApi.get('quotes')
    ProxyState.quote = new Quote(res.data)



  }

}
export const quotesService = new QuotesService();