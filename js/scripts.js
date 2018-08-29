function Pizza(topping,size){
  this.topping = topping;
  this.size = size;
}
var toppingAssign = {cheese:1, pepperoni: 2, artochoke:1};
var sizeAssign = {small:1,medium:2,large:3};

Pizza.prototype.total = function(){
  var totalTopping = 0;
  for(var i=0;i<this.topping.length;i++){
    totalTopping += toppingAssign[this.topping[i]];
  }
  return totalTopping + sizeAssign[this.size];
}
$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    var pizzaTopping = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      pizzaTopping.push($(this).val());
    });
    var pizzaSize = $("input:radio[name=size]:checked").val();
    var total = new Pizza(pizzaTopping,pizzaSize);
    $("#result").slideDown();
    $("#result").empty().append("Total is: " +total.total());

  });
});
