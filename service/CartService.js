'use strict';


/**
 * View the content of the cart
 *
 * cartId Long 
 * returns Cart
 **/
exports.cartCartIdGET = function(cartId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : {
    "currency" : "eur",
    "value" : 8.008281904610117E13
  },
  "books" : [ {
    "id" : 0,
    "title" : "Il deserto dei tartari",
    "author" : "Dino Buzzati",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  }, {
    "id" : 0,
    "title" : "Il deserto dei tartari",
    "author" : "Dino Buzzati",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

