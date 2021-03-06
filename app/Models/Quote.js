export default class Quote {
  constructor({ author, content }) {
    this.body = content
    this.author = author

  }
  get Template() {
    return `
  <div class="myDIV">
    <h3>"${this.body}"</h3> 
  </div>
  <div class="hide">
    <br><h4>-${this.author}</h4>
</div>
  

  
  
  `
  }
}

// Quote": {
//   "quote": {
//   "body": { },
//   "author": { },
//   "tags": [
//   { }
//   ]
//   },
//   "description": {
//   "type": "String",
//   "required": true
//   }
//   },_id": "kHwm1n8I5e",

// "tags": [
//   "friendship"
//   ],
//   "content": "But friendship is precious, not only in the shade, but in the sunshine of life, and thanks to a benevolent arrangement the greater part of life is sunshine.",
//   "author": "Thomas Jefferson",
//   "authorSlug": "thomas-jefferson",
//   "length": 156
//   }
