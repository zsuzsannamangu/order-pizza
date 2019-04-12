function Pizza() {
  // 14in plain is default
  this.size = "14inch";
  this.toppings = [];
}

Pizza.prototype.selectSize = function(size) {
  this.size = size; // this.size is an attribute of the object, the object is the instance of Pizza.
}

Pizza.prototype.selectTopping = function(topping) { // this topping is the argument of the function "selectTopping"
  this.toppings.push(topping);
}

var possibleSizes = {
  "10inch": 10,
  "14inch": 14,
  "18inch": 18
}

var possibleToppings = {
  "spinach": 1,
  "artichoke": 2,
  "mushroom": 2,
  "tomatoes": 2,
  "truffle oil": 4
}

Pizza.prototype.pizzaCost = function() {
  var cost = 0;
  this.toppings.forEach(function(topping) {
    console.log(topping, possibleToppings[topping]);
    cost += possibleToppings[topping]
  });
  return cost
};

var pizza = new Pizza()

pizza.selectTopping('mushroom')
pizza.selectTopping('spinach')
console.log(pizza.pizzaCost())

// var pizza = new Pizza() // "specific" pizza is the instance of "abstract" Pizza "class".
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
