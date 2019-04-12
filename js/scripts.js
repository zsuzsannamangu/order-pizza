//Business logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

// Pizza.prototype.selectSize = function(size) {
//   this.size = size;
// }

Pizza.prototype.selectTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.possibleSizes = {
  "small": 10,
  "medium": 14,
  "large": 18
}

Pizza.prototype.possibleToppings = {
  "spinach": 1,
  "artichoke": 2,
  "mushroom": 2,
  "tomatoes": 3,
  "truffle oil": 4
}

Pizza.prototype.pizzaCost = function() {
  var cost = 0;
  this.size in this.possibleSizes
    cost = this.possibleSizes[this.size] + cost

  this.toppings.forEach(function(topping) {
    cost = cost + this.possibleToppings[topping]
  });
  return cost
}

// User interface logic
$(document).ready(function() {
  $(".btn1").click(function() {
    $(".finalCost").show();

    var pizza = new Pizza(
      $("#size").val(),
      $("input:checkbox[name=toppings]:checked").val()
        // var toppingsChosen = $(this).val();
        // $(".finalCost").append(toppingsChosen + "<br>");
    );

    var cost = pizza.pizzaCost();
    $(".totalcost").text(parseInt(cost));

    console.log(parseInt(cost))

  });
  $(".btn3").click(function() {

    var addressInput = $("input#address").val();
    var nameInput = $("input#name").val();

    $(".thankyou").show();
    $(".name").html(nameInput);
    $(".address").html(addressInput);
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
