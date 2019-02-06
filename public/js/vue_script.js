var vm = new Vue({
  el: '#Hamburger-section',
  data: {
    menuitem: menuitems
  }
})

var vs = new Vue({
    el: '#klar',
    methods: {
        markDone: function() {
          var customerInformation = [
            document.getElementById("Full name").value,
            document.getElementById("E-mail").value,
            document.getElementById("street").value,
            document.getElementById("House").value,
            document.getElementById("Payment method").value
          ];
          var radios = document.getElementsByName('genders');

          if (document.getElementById("Male").checked) {
            customerInformation.push(document.getElementById("Male").value);
          }
          if (document.getElementById("Female").checked) {
            customerInformation.push(document.getElementById("Female").value);
          }
          if (document.getElementById("Non-binary").checked) {
            customerInformation.push(document.getElementById("Non-binary").value);
          }
          if (document.getElementById("null").checked) {
            customerInformation.push(document.getElementById("null").value);
          }
          for (var i = 0; i < menuitems.length; i++) {
            if (document.getElementById(menuitems[i].name).checked) {
              customerInformation.push(menuitems[i].name);
            }
          }

          document.getElementById("order-information").innerHTML = "Din beställning:";
          document.getElementById("burger-information").innerHTML = customerInformation.slice(6);
          document.getElementById("important-information").innerHTML = customerInformation.slice(0,6);
        }
    }
});
