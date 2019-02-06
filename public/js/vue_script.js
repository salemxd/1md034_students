
function MenuItem(burgername, burgerkcal, burgergluten, burgerlactose, img){
  this.name = burgername;
  this.kcal = burgerkcal;
  this.gluten = burgergluten;
  this.lactose = burgerlactose;
  this.image = img;
}

menuitems = [new MenuItem("Vanlig & liten", 600, true, false, "img/hamburgare.jpg"), new MenuItem("min bästa kawaii uwu", 300, false, true, "img/kawaii.jpg"), new MenuItem("pretty crispy", 600, true, true, "img/fake.jpg"), new MenuItem("otroligt vanlig", 100, false, false, "img/otrligtvanligt.jpg"), new MenuItem("so amazing", 10000, false, false, "img/amazing.jpg")];

var vm = new Vue({
  el: '#Hamburger-section',
  data: {
    menuitem: menuitems
  }
})

console.log("jaaaa");
