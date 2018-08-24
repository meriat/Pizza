function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

var toppingName = {cheese: 3, pepperoni:5 , artichoke: 4 };
var sizeName = {small:3, medium: 4, large: 5};

Pizza.prototype.amount = function(){
  return 
}


$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
  })
});
