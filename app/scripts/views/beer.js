var app = app || {};

app.BeerView = Backbone.View.extend({
  tagName: 'div',
  className: 'beer',
  template: _.template( $('#beer-template').html() ),

  events: {
    'click .beer__edit': 'edit',
    'click .beer__cancel': 'close',
    'click .beer__save': 'save',
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

  edit: function(e) {
    if (e) {
      e.preventDefault();
    }

    this.$el.addClass('is-editing');
  },

  close: function(e) {
    if (e) {
      e.preventDefault();
    }

    this.$el.removeClass('is-editing');
  },

  /**
   * @todo Fix bug where saving re-renders the front of the beer card.
   */
  save: function(e) {
    e.preventDefault();

    var $form = this.$el.find('form');

    var formData = app.formatBeerInput($form);

    this.model.save(formData);

    this.render();
    this.close();
  },

  deleteBeer: function() {
    var confirm = window.confirm('Permanently remove beer?');

    if (confirm) {
      this.model.destroy();
      this.remove();
    }
  }
});