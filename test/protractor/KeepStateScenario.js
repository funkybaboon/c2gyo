'use strict';

describe('Keep State over different tabs', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/stadtmobil');
    browser.waitForAngular();
  });

  it('should keep the duration at 1 week, 10 hours, 100km', function() {
    element(by.model('rental.timeWeeks')).clear().sendKeys(1);
    element(by.model('rental.distance')).clear().sendKeys(100);

    expect(price.getText()).toEqual('159,00 €');
    expect(priceDistance.getText()).toEqual('20,00 €');
    expect(priceTime.getText()).toEqual('139,00 €');

    element(by.id('nav-button')).click();
    element(by.id('car2go')).click();
    expect(price.getText()).toEqual('632,00 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('632,00 €');

    element(by.id('nav-button')).click();
    element(by.id('greenwheels')).click();
    expect(price.getText()).toEqual('322,22 €');
    expect(priceDistance.getText()).toEqual('24,00 €');
    expect(priceTime.getText()).toEqual('298,22 €');

    element(by.id('nav-button')).click();
    element(by.id('flinkster')).click();
    expect(price.getText()).toEqual('325,00 €');
    expect(priceDistance.getText()).toEqual('20,00 €');
    expect(priceTime.getText()).toEqual('305,00 €');

    element(by.id('nav-button')).click();
    element(by.id('drivenow')).click();
    expect(price.getText()).toEqual('3.310,80 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('3.310,80 €');

    element(by.id('nav-button')).click();
    element(by.id('bookndrive')).click();
    expect(price.getText()).toEqual('267,00 €');
    expect(priceDistance.getText()).toEqual('25,00 €');
    expect(priceTime.getText()).toEqual('240,00 €');
  });

});
