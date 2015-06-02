describe('c2gb test 10km 1 hour', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/c2gb');
  });

  it('10km, 1 hour', function() {
    element(by.model('rental.timeHours')).clear().sendKeys(1);

    expect(price.getText()).toEqual('14,90 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('14,90 €');
  });

  it('10km, 1 hour, airport fee', function() {
    element(by.model('rental.timeHours')).clear().sendKeys(1);
    element(by.model('rental.airport')).click();

    expect(price.getText()).toEqual('19,80 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('14,90 €');
  });
});
