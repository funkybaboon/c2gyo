describe('c2gb test 1000km 33 hours', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/c2gb');
  });

  it('1000km, 33 hours', function() {
    element(by.model('rental.distance')).clear().sendKeys(1000);
    element(by.model('rental.timeHours')).clear().sendKeys(33);

    expect(price.getText()).toEqual('453,50 €');
    expect(priceDistance.getText()).toEqual('275,50 €');
    expect(priceTime.getText()).toEqual('178,00 €');
  });

  it('1000km, 33 hours, airport fee', function() {
    element(by.model('rental.distance')).clear().sendKeys(1000);
    element(by.model('rental.timeHours')).clear().sendKeys(33);
    element(by.model('rental.airport')).click();

    expect(price.getText()).toEqual('458,40 €');
    expect(priceDistance.getText()).toEqual('275,50 €');
    expect(priceTime.getText()).toEqual('178,00 €');
  });

});
