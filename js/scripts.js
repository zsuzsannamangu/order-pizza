//Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.display = function() {
  return `
    <h4> 1 ${this.size} pizza -- $${this.pizzaCost()}</h4>
    <li>${this.toppings.join("</li><li>")}</li>
    `;
}

var possibleSizes = {
  "small": 10,
  "medium": 14,
  "large": 18
}

var possibleToppings = {
  "cheese": 0,
  "marinara": 0,
  "spinach": 1,
  "artichoke": 2,
  "mushroom": 2,
  "sundried tomatoes": 3,
  "truffle oil": 4
}

Pizza.prototype.pizzaCost = function() {
  var cost = 0;
  cost = possibleSizes[this.size] + cost

  this.toppings.forEach(function(topping) {
    cost = cost + possibleToppings[topping]
  });
  return cost
}

var orders = [];
var totalcost = 0;

// User interface logic
$(document).ready(function() {
  $(".btn1").click(function() {
    $(".finalCost").show();

    var toppings = ['cheese', 'marinara'];
    $("input:checkbox[name=toppings]:checked").each(
      function(){
        toppings.push($(this).val())
        $(this).prop("checked", false);
      }
    )
    var pizza = new Pizza(
      $("#size").val(),
      toppings
    );

    orders.push(pizza.display());

    totalcost += pizza.pizzaCost();
    $(".totalcost").html(parseInt(totalcost));
    $(".order").html(orders.join(" "));

    // console.log(parseInt(cost))
  });

  $(".btn2").click(function() {

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
