//Business logic
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
  cost = cost + possibleSizes[this.size]
  console.log(cost)
  this.toppings.forEach(function(topping) {
  console.log(topping, possibleToppings[topping]);
  cost = cost + possibleToppings[topping]
  });
  return cost
};

//User interface logic
$(document).ready(function() {
  $(".btn1").click(function() {
    var pizza = new Pizza(
      $("#size").val(),
      $("#toppings").val()
    )
    var cost = pizza.pizzaCost();

    $(".totalcost").text(cost);
    $(".finalcost").show();

    console.log(cost.size)
    // console.log(cost.pizzaCost())
  });
});



//
// var pizza = new Pizza()
//
// pizza.selectTopping('mushroom')
// pizza.selectTopping('spinach')
// console.log(pizza.pizzaCost())

// var pizza = new Pizza() // "specific" pizza is the instance of "abstract" Pizza "class".
// console.log(pizza.size)
//
// pizza.selectSize("18inch") // when I call the function here that in () I put in the value (18inch) of the variable (size).
// console.log(pizza.size)
//
// pizza.size = '18inchwff'
// console.log(pizza.size)
