describe('c2g test 10km 2000 minutes', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/c2g');
  });

  it('10km, 2000 minutes', function() {
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(2000);

    expect(price.getText()).toEqual('118,00 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('118,00 €');
  });

  it('10km, 2000 minutes, airport fee', function() {
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(2000);
    element(by.model('rental.airport')).click();

    expect(price.getText()).toEqual('122,90 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('118,00 €');
  });

  it('10km, 2000 minutes, 10 standing minutes', function() {
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(2000);
    element(by.model('rental.timeStanding')).clear().sendKeys(10);

    expect(price.getText()).toEqual('119,90 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('119,90 €');
  });

  it('10km, 2000 minutes, 10 standing minutes, airport fee', function() {
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(2000);
    element(by.model('rental.timeStanding')).clear().sendKeys(10);
    element(by.model('rental.airport')).click();

    expect(price.getText()).toEqual('124,80 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('119,90 €');
  });
});
