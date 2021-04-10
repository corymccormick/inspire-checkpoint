import { ProxyState } from "../AppState";
import { sandboxApi } from "./AxiosService";




class QuotesService {
  //get-appending to base url
  async getQuote() {
    let res = await sandboxApi.get('quotes')
    console.log("initial response:", res);
  }

}
export const quotesService = new QuotesService();