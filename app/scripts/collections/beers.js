var app = app || {};

var BeerList = Backbone.Collection.extend({
  model: app.Beer,

  localStorage: new Backbone.LocalStorage(LOCAL_STORAGE_NS),

  initialize: function() {

  }
});

app.Beers = new BeerList();