describe('c2g test 100km 20 minutes', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/c2g');
  });

  it('100km, 20 minutes', function() {
    element(by.model('rental.distance')).clear().sendKeys(100);
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(20);

    expect(price.getText()).toEqual('20,30 €');
    expect(priceDistance.getText()).toEqual('14,50 €');
    expect(priceTime.getText()).toEqual('5,80 €');
  });

  it('100km, 20 minutes, airport fee', function() {
    element(by.model('rental.distance')).clear().sendKeys(100);
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(20);
    element(by.model('rental.airport')).click();

    expect(price.getText()).toEqual('25,20 €');
    expect(priceDistance.getText()).toEqual('14,50 €');
    expect(priceTime.getText()).toEqual('5,80 €');
  });

  it('100km, 20 minutes, 10 standing minutes', function() {
    element(by.model('rental.distance')).clear().sendKeys(100);
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(20);
    element(by.model('rental.timeStanding')).clear().sendKeys(10);

    expect(price.getText()).toEqual('22,20 €');
    expect(priceDistance.getText()).toEqual('14,50 €');
    expect(priceTime.getText()).toEqual('7,70 €');
  });

  it('100km, 20 minutes, 10 standing minutes, airport fee', function() {
    element(by.model('rental.distance')).clear().sendKeys(100);
    element(by.model('rental.timeHours')).clear();
    element(by.model('rental.timeMinutes')).clear().sendKeys(20);
    element(by.model('rental.timeStanding')).clear().sendKeys(10);
    element(by.model('rental.airport')).click();

    expect(price.getText()).toEqual('27,10 €');
    expect(priceDistance.getText()).toEqual('14,50 €');
    expect(priceTime.getText()).toEqual('7,70 €');
  });
});
