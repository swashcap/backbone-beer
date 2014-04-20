var app = app || {};

app.Beer = Backbone.Model.extend({
  defaults: {
    name: 'No name',
    brewery: 'Unknown',
    tags: [],
    rating: 3
  }
});