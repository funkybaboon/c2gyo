describe('sm test', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/sm');
  });

  it('10km, 10 hours, classic, A', function() {

    expect(price.getText()).toEqual('16,00 €');
    expect(priceDistance.getText()).toEqual('2,00 €');
    expect(priceTime.getText()).toEqual('14,00 €');
  });

  it('10km, 10 hours, classic, B', function() {
    element(by.id('rateB')).click();

    expect(price.getText()).toEqual('24,20 €');
    expect(priceDistance.getText()).toEqual('2,20 €');
    expect(priceTime.getText()).toEqual('22,00 €');
  });

  it('10km, 10 hours, classic, C', function() {
    element(by.id('rateC')).click();

    expect(price.getText()).toEqual('30,60 €');
    expect(priceDistance.getText()).toEqual('2,60 €');
    expect(priceTime.getText()).toEqual('28,00 €');
  });

  it('10km, 10 hours, classic, D', function() {
    element(by.id('rateD')).click();

    expect(price.getText()).toEqual('34,90 €');
    expect(priceDistance.getText()).toEqual('2,90 €');
    expect(priceTime.getText()).toEqual('32,00 €');
  });

  it('10km, 10 hours, classic, F', function() {
    element(by.id('rateF')).click();

    expect(price.getText()).toEqual('45,30 €');
    expect(priceDistance.getText()).toEqual('3,30 €');
    expect(priceTime.getText()).toEqual('42,00 €');
  });

});
