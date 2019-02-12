/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#vuebody',
  data: {
    orders: {},
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: this.orders[0].details,
                                orderItems: this.orders[0].orderItems
                              });
    },
    displayOrder: function (){
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      var customerInformation = [
        document.getElementById("Full name").value,
        document.getElementById("E-mail").value,
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
      Vue.set(this.orders, 0, {details: { x: event.clientX - 10 - offset.x, y: event.clientY - 10 - offset.y }, orderItems: customerInformation.slice(4)});
    }
  }
});
