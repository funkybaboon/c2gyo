describe('greenwheels test all input fields and checkboxes', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/greenwheels');
    browser.waitForAngular();

    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);
  });

  it('should calculate a price with all input forms filled', function() {
    expect(price.getText()).toEqual('693,42 €');
    expect(priceDistance.getText()).toEqual('53,28 €');
    expect(priceTime.getText()).toEqual('640,14 €');
  });
});
