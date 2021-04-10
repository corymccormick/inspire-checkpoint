import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";

class App {
  imagesController = new ImagesController();

  quotesController = new QuotesController();
}

window["app"] = new App();
