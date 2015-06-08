describe('c2gb test 100km 1 hour', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/c2gb');
  });

  it('100km, 1 hour', function() {
    element(by.model('rental.distance')).clear().sendKeys(100);
    element(by.model('rental.timeHours')).clear().sendKeys(1);

    expect(price.getText()).toEqual('29,40 €');
    expect(priceDistance.getText()).toEqual('14,50 €');
    expect(priceTime.getText()).toEqual('14,90 €');
  });

  it('100km, 1 hour, airport fee', function() {
    element(by.model('rental.distance')).clear().sendKeys(100);
    element(by.model('rental.timeHours')).clear().sendKeys(1);
    element(by.model('rental.airport')).click();

    expect(price.getText()).toEqual('34,30 €');
    expect(priceDistance.getText()).toEqual('14,50 €');
    expect(priceTime.getText()).toEqual('14,90 €');
  });
});
