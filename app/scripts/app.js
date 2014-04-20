app = app || {};

$(function () {
  var beers = [
    {
      name: 'Amber Ale',
      brewery: 'Oakshire Brewing Co.',
      rating: 3,
      tags: ['amber', 'eugene']
    },
    {
      name: 'Black Butte Porter',
      brewery: 'Deschutes Brewing',
      rating: 5,
      tags: ['porter']
    },
    {
      name: 'Filament Winter IPA',
      brewery: 'Ecliptic Brewing',
      rating: 3,
      tags: ['ipa', 'portland']
    },
    {
      name: 'Lompoc Special Draft',
      brewery: 'Lompoc Brewing Co.',
      rating: 3,
      tags: ['limited release', 'portland']
    },
    {
      name: 'Hopportunity Knocks Ale',
      brewery: 'Caldera',
      rating: 2,
      tags: ['organic', 'ale']
    }
  ];

  // Kick things off by creating the **App**
  // new app.AppView(beers);
  new app.AppView();
});