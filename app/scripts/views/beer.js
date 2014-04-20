var app = app || {};

app.BeerView = Backbone.View.extend({
  tagName: 'div',
  className: 'beer',
  template: _.template( $('#beer-template').html() ),

  events: {
    'click .beer__edit': 'editBeer',
    'click .beer__save': 'saveBeer',
    'click .beer__remove': 'deleteBeer'
  },

  render: function() {
    var data = this.model.toJSON();

    if ( ! data.hasOwnProperty('id') ) {
      data.id = '';
    }

    this.$el.html(this.template(data));
    return this;
  },

  editBeer: function(e) {
    e.preventDefault();

    console.log('editBeer() fired.');
  },

  saveBeer: function(e) {
    e.preventDefault();

    console.log('saveBeer() fired.');
  },

  deleteBeer: function() {
    var confirm = window.confirm('Permanently remove beer?');

    if (confirm) {
      this.model.destroy();
      this.remove();
    }
  }
});