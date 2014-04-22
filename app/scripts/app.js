app = app || {};

$(function () {
  // Kick things off by creating the **App**
  new app.AppView();

  // Seed data if the nothing exists in localStorage
  if ( ! localStorage.getItem(LOCAL_STORAGE_NS)) {
    app.Beers.create({
      name: 'Amber Ale',
      brewery: 'Oakshire Brewing Co.',
      rating: 3,
      tags: ['amber', 'eugene']
    });
    app.Beers.create({
      name: 'Black Butte Porter',
      brewery: 'Deschutes Brewing',
      rating: 5,
      tags: ['porter']
    });
    app.Beers.create({
      name: 'Filament Winter IPA',
      brewery: 'Ecliptic Brewing',
      rating: 3,
      tags: ['ipa', 'portland']
    });
    app.Beers.create({
      name: 'Lompoc Special Draft',
      brewery: 'Lompoc Brewing Co.',
      rating: 3,
      tags: ['limited release', 'portland']
    });
    app.Beers.create({
      name: 'Hopportunity Knocks Ale',
      brewery: 'Caldera',
      rating: 2,
      tags: ['organic', 'ale']
    });
    app.Beers.create({
      name: 'Most Premium Russian Stout',
      brewery: 'Gigantic Brewing Company',
      rating: 4,
      tags: ['stout', 'high abv']
    });
    app.Beers.create({
      name: 'Chonookie Wookie Ale',
      brewery: 'Hopworks',
      rating: 4,
      tags: ['single hops']
    });
    app.Beers.create({
      name: 'Filament Winter IPA',
      brewery: 'Ecliptic Brewing',
      rating: 3,
      tags: ['ipa', 'portland']
    });
  }
});