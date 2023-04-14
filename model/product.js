class Product {
  comments = new Set();
  upvotes = 0;
  commentsCount = 0;
  tags = [];
  images = [];
  id = 0;
  #name = "";

  constructor(name, shortDesc, longDesc, URL, logo, createdOn, createdBy) {
    this.#name = name;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.URL = URL;
    // this.tags = tags;
    this.logo = logo;
    // this.images = images;
    this.createdOn = createdOn;
    this.createdBy = createdBy;
  }
  addComment(comment) {
    console.log("Inside addComment of Product");
    this.comments.add(comment);
  }

  get name() {
    return this.#name;
  }

  getComment() {
    return Array.from(this.comments);
  }

  static staticFunction() {
    console.log("Inside static function");
  }

  static staticVar = 10;

  upvote() {
    this.upvotes++;
  }

  addTag(tag) {
    this.xyz = 10;
    this.tags.push(tag);
  }

  addImage(image) {
    this.images.push(image);
  }
}

class Comment {
  constructor(id, comment, likes, createdOn, createdBy) {
    this.id = id;
    this.comment = comment;
    this.likes = likes;
    this.createdOn = createdOn;
    this.createdBy = createdBy;
  }
}

Product.prototype.commentsCount = function (abc) {
  return this.comments.length + abc;
};

// // chatGPT.alpha = "Chat GPT 2.0";
// console.log(chatGPT.name);
// console.log(Product.staticVar, chatGPT.staticVar, Product.staticFunction());

// console.log(chatGPT.commentsCount(10), coPilot.commentsCount(20));
// console.log(chatGPT === coPilot);

class ExpensiveProduct extends Product {
  constructor(
    name,
    shortDesc,
    longDesc,
    URL,
    logo,

    createdOn,
    createdBy,
    price
  ) {
    super(name, shortDesc, longDesc, URL, logo, createdOn, createdBy);
    this.price = price;
  }

  addComment(comment) {
    console.log("Inside addComment of ExpensiveProduct");
    super.addComment(comment);
  }
}

class VeryExpProduct extends ExpensiveProduct {
  constructor(name, shortDesc, longDesc, URL, logo, createdOn, createdBy, price, discount) {
    super(name, shortDesc, longDesc, URL, logo, createdOn, createdBy, price);
    this.discount = discount;
  }
}

let chatGPT = new ExpensiveProduct("Chat GPT", "Short Desc", "Long Desc", "URL", "Logo", "Created On", "Created By");

// let coPilot = new ExpensiveProduct("CoPilot", "Short Desc", "Long Desc", "URL", "Logo", "Created On", "Created By");

chatGPT.addComment(new Comment(1, "Comment 1", 10, "Created On", "Created By"));
console.log(chatGPT.getComment(), chatGPT.toString());
