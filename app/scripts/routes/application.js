App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    if (typeof(localStorage.cartId) === "undefined") {
      debugger;
      var cart = this.store.createRecord("cart");
      cart.save().then(function(cartObject) {
        localStorage.cartId = cartObject.get('id');
        return cartObject;
      });
    } else {
      return this.store.find("cart", localStorage.cartId);
    }
  }
});