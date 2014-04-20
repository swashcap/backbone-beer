var app = app || {};

var BeerList = Backbone.Collection.extend({
  model: app.Beer,

  localStorage: new Backbone.LocalStorage(LOCAL_STORAGE_NS),

  initialize: function() {
    //this.listenTo(this.models, 'testBeerTrigger', this.test);
    console.log(this.models);
  },

  test: function() {
    console.log('BeerList.test() fired.');
  }
});

app.Beers = new BeerList();