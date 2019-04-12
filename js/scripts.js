//Business logic
function Pizza(size) {
  // 14in plain is default
  this.size = size;
  // this.toppings = [];
}

// Pizza.prototype.selectSize = function(size) {
//   this.size = size; // this.size is an attribute of the object, the object is the instance of Pizza.
// }

// Pizza.prototype.selectTopping = function(topping) { // this topping is the argument of the function "selectTopping"
//   this.toppings.push(topping);
// }

Pizza.prototype.possibleSizes = {
  "small": 10,
  "medium": 14,
  "large": 18
}

// Pizza.prototype.possibleToppings = {
//   "spinach": 1,
//   "artichoke": 2,
//   "mushroom": 2,
//   "tomatoes": 2,
//   "truffle oil": 4
// }

Pizza.prototype.pizzaCost = function() {
  var cost = 0;
  if (this.size in this.possibleSizes){
    cost = this.possibleSizes[this.size] + cost
  }
  // cost = this.possibleSizes[this.size]
  // console.log(cost)
  // this.toppings.forEach(function(topping) {
  // // console.log(topping, possibleToppings[topping]);
  // cost = cost + this.possibleToppings[topping]
  // });
  // console.log(cost)
  return cost
}

// User interface logic
$(document).ready(function() {
  $(".btn1").click(function() {
    var pizza = new Pizza(
      $("#size").val(),
      // $("#toppings").val()
    )
    var cost = pizza.pizzaCost();

    $(".totalcost").text(parseInt(cost));
    $(".finalcost").show();

    console.log(parseInt(cost))
    // console.log(cost.pizzaCost())
  });
});



// //
// var pizza = new Pizza()
//
// pizza.selectTopping('mushroom')
// pizza.selectTopping('spinach')
// console.log(pizza.pizzaCost())
//
// var pizza = new Pizza() // "specific" pizza is the instance of "abstract" Pizza "class".
// console.log(pizza.size)
//
// pizza.selectSize("18inch") // when I call the function here that in () I put in the value (18inch) of the variable (size).
// console.log(pizza.size)
//
// pizza.size = '18inchwff'
// console.log(pizza.size)
