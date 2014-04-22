var app = app || {};

/**
 * Application setup.
 *
 * Contains necessary globals to run the modules, utilities, helpers,
 * and whatever else is necessary to bootstrap stuff.
 */

var LOCAL_STORAGE_NS = 'backbone-beer';

/**
 * Format beer form input.
 *
 * @param  obj Form object
 * @return obj Formatted form input
 */
app.formatBeerInput = function(form) {
  var $form = $(form);

  var formData = {};

  $.each($form.find('input'), function(i, el) {
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

  return formData;
};