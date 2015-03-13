describe('c2gb test 10km 33 hours', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/c2gbdtp');
  });

  it('10km, 33 hours', function() {
    element(by.model('rental.timeHours')).clear().sendKeys(33);

    expect(price.getText()).toEqual('178,00 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('178,00 €');
  });

  it('10km, 33 hours, airport fee', function() {
    element(by.model('rental.timeHours')).clear().sendKeys(33);
    element(by.model('rental.airport')).click();

    expect(price.getText()).toEqual('182,90 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('178,00 €');
  });

});
