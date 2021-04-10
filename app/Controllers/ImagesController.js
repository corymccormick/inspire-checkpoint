import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";


//Private
function drawImage() {
  let image = ProxyState.image
  document.getElementById('images').style['background-image'] = `url(${image.url})`
  document.getElementById('images').style['background-size'] = 'cover'

}



//Public
export default class ImagesController {
  constructor() {
    ProxyState.on("image", drawImage)
    this.getImage()

  }

  getImage() {
    imagesService.getImage()
  }
}
