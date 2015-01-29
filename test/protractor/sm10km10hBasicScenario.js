describe('sm test', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/sm');
    element(by.id('tariffbasic')).click();
  });

  it('10km, 10 hours, basic, A', function() {

    expect(price.getText()).toEqual('18,20 €');
    expect(priceDistance.getText()).toEqual('2,20 €');
    expect(priceTime.getText()).toEqual('16,00 €');
  });

  it('10km, 10 hours, basic, B', function() {
    element(by.id('rateB')).click();

    expect(price.getText()).toEqual('29,70 €');
    expect(priceDistance.getText()).toEqual('2,70 €');
    expect(priceTime.getText()).toEqual('27,00 €');
  });

  it('10km, 10 hours, basic, C', function() {
    element(by.id('rateC')).click();

    expect(price.getText()).toEqual('36,10 €');
    expect(priceDistance.getText()).toEqual('3,10 €');
    expect(priceTime.getText()).toEqual('33,00 €');
  });

  it('10km, 10 hours, basic, D', function() {
    element(by.id('rateD')).click();

    expect(price.getText()).toEqual('40,40 €');
    expect(priceDistance.getText()).toEqual('3,40 €');
    expect(priceTime.getText()).toEqual('37,00 €');
  });

  it('10km, 10 hours, basic, F', function() {
    element(by.id('rateF')).click();

    expect(price.getText()).toEqual('50,80 €');
    expect(priceDistance.getText()).toEqual('3,80 €');
    expect(priceTime.getText()).toEqual('47,00 €');
  });

});
