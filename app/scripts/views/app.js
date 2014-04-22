var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#beer-app',

  events: {
    'click #add-form button': 'addBeer'
  },

  initialize: function(initialBeers) {
    this.$beerContainer = this.$('#beers-go-here');

    // Re-render when a beer is added
    this.listenTo(app.Beers, 'add', this.renderBeer);
    this.listenTo(app.Beers, 'reset', this.render);
    //this.listenTo(app.Beers, 'all', this.render);

    app.Beers.fetch();
  },

  render: function() {
    console.log('AppView render() fired.');

    //this.collection.each(function(beer) {
    //  this.renderBeer(beer);
    //}, this);
  },

  renderBeer: function(beer) {
    var beerView = new app.BeerView({
      model: beer
    });
    this.$beerContainer.append(beerView.render().el);
  },

  /**
   * Handle beer add form.
   *
   * @todo Validate form.
   *
   * @param  obj  Form event
   * @return void
   */
  addBeer: function(e) {
    e.preventDefault();

    var formData = {};

    $('#add-form input').each(function(i, el) {
      if ($(el).val() != '') {
        if (el.name == 'tags') {
          /** @todo Split tags from the form more intelligently. */
          var tags = $(el).val().split(' ');

          // Sanitize form input
          tags = _.compact(tags);

          formData[el.name] = tags;
        } else {
          formData[el.name] = $(el).val();
        }
      }
    });

    // Pass form data to the collection
    if (_.size(formData)) {
      app.Beers.create(formData);
    }

    // Clear the inputs
    $('#add-form input').val('');
  }
});