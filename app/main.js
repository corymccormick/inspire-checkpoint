import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import WeatherController from "./Controllers/WeatherContoller.js";

class App {
  imagesController = new ImagesController();

  quotesController = new QuotesController();

  weatherController = new WeatherController();
}

window["app"] = new App();
