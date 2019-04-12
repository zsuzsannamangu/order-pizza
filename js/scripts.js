function Pizza() {
  // 14in plain is default
  this.size = "14inch";
  this.toppings = [];
}

Pizza.prototype.selectSize = function(size) {
  this.size = size;
}

Pizza.prototype.selectTopping = function(topping) { // this topping is the argument of the function "selectTopping"
  this.toppings.push(topping);
}

Pizza.prototype.possibleSizes = {
  "10inch": 10,
  "14inch": 14,
  "18inch": 18
}

Pizza.prototype.possibleToppings = {
  "spinach": 1,
  "artichoke": 2,
  "mushroom": 2,
  "tomatoes": 2,
  "truffle oil": 4
}

// Pizza.prototype.pizzaCost = function() {
//
// }


// var pizza = new Pizza()
// console.log(pizza.size)
//
// pizza.selectSize("18inch") // when I call the function here that in () I put in the value (18inch) of the variable (size).
// console.log(pizza.size)
//
// pizza.size = '18inchwff'
// console.log(pizza.size)









var myFunc = function(myArg) {
  console.log('This is "myArg":', myArg);
  return "this is what I return."
}
