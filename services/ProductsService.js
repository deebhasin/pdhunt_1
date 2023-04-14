let { Product, Comment } = require("../model/product");
// let Comment = require("../model/comment");

function getProducts() {
  // Get a collection of products from DB
}

function getProductById(id) {
  // Get the products from DAO
  let chatGPT = new Product("Chat GPT", "Short Desc", "Long Desc", "URL", "Logo", "Created On", "Created By");

  let coPilot = new Product("CoPilot", "Short Desc", "Long Desc", "URL", "Logo", "Created On", "Created By");

  const comment1 = new Comment(1, "Comment 1", 10, "Created On", "Created By");
  chatGPT.addComment(comment1);

  console.log(chatGPT.getComment());

  Product.getABC();
  console.log(Product.abc);
  chatGPT.addComment(comment1);

  // let proto = chatGPT.__proto__;
  // console.dir(proto);
  // console.dir(Product.prototype);

  // console.log(Product.prototype === chatGPT.__proto__);
  // console.log(chatGPT.__proto__ === coPilot.__proto__);

  return chatGPT;
}

function saveProduct(product) {
  // Save the product to the database using DAO
}

// console.log(getProductById(1));
getProductById(1);
