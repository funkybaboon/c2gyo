describe('c2g test 10km 229 minutes', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/c2g');
  });

  it('10km, 229 minutes', function() {
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(229);

    expect(price.getText()).toEqual('58,91 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('58,91 €');
  });

  it('10km, 230 minutes', function() {
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(230);

    expect(price.getText()).toEqual('59,00 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('59,00 €');
  });

  it('10km, 1439 minutes', function() {
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(1439);

    expect(price.getText()).toEqual('59,00 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('59,00 €');
  });

});
