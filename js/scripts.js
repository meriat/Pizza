function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

var toppingName = {cheese: 3, pepperoni:5 , artichoke: 4 };
var sizeName = {small:3, medium: 4, large: 5};

Pizza.prototype.amount = function(){
  return toppingName[this.topping] + sizeName[this.size];
};


$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    var topping = $("input:radio[name=topping]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    console.log(topping);
    var newTotal = new Pizza(topping,size);

    $("#result").append("<span class=result>" + newTotal.amount() +"</span>");

  })
});
