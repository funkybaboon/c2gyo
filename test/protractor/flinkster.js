describe('test flinkster input fields', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/flinkster');
    browser.waitForAngular();

    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);
  });

  it('tariff "lokal" should not have an airport checkbox', function() {
    expect(element(by.model('rental.airport.flinkster')).isPresent()).toBe(true);
    element(by.id('tarifflokal')).click();
    expect(element(by.model('rental.airport.flinkster')).isPresent()).toBe(false);
  });

  it('should calculate a price with all input forms filled', function() {
    expect(price.getText()).toEqual('689,40 €');
    expect(priceDistance.getText()).toEqual('44,40 €');
    expect(priceTime.getText()).toEqual('645,00 €');
  });

  it('should calculate a price with all checkboxes ticked', function() {
    element(by.id('ratemini')).click();
    expect(price.getText()).toEqual('668,56 €');
    expect(priceDistance.getText()).toEqual('39,96 €');
    expect(priceTime.getText()).toEqual('628,60 €');

    element(by.id('rateklein')).click();
    expect(price.getText()).toEqual('849,96 €');
    expect(priceDistance.getText()).toEqual('39,96 €');
    expect(priceTime.getText()).toEqual('810,00 €');

    element(by.id('ratekompakt')).click();
    expect(price.getText()).toEqual('1.011,96 €');
    expect(priceDistance.getText()).toEqual('39,96 €');
    expect(priceTime.getText()).toEqual('972,00 €');

  });


});
