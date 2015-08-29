describe('c2g test all input fields and checkboxes', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/c2g');
  });

  it('should calculate a price with all input forms filled', function() {
    element(by.model('rental.timeMinutes')).clear().sendKeys(2);
    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeStanding')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);

    expect(price.getText()).toEqual('198,64 €');
    expect(priceDistance.getText()).toEqual('49,88 €');
    expect(priceTime.getText()).toEqual('148,76 €');
  });

  it('should calculate a price with all checkboxes ticked', function() {
    element(by.model('rental.timeMinutes')).clear().sendKeys(2);
    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeStanding')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);

    element(by.model('rental.airport.c2g')).click();

    expect(price.getText()).toEqual('203,54 €');
    expect(priceDistance.getText()).toEqual('49,88 €');
    expect(priceTime.getText()).toEqual('148,76 €');
  });
});
