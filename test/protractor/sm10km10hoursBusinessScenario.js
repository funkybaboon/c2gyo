describe('sm test 10km 10 hours', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/smdtp');
    element(by.id('tariffbusiness')).click();
  });

  it('10km, 10 hours, basic, A', function() {

    expect(price.getText()).toEqual('14,70 €');
    expect(priceDistance.getText()).toEqual('1,70 €');
    expect(priceTime.getText()).toEqual('13,00 €');
  });

  it('10km, 10 hours, basic, B', function() {
    element(by.id('rateB')).click();

    expect(price.getText()).toEqual('20,70 €');
    expect(priceDistance.getText()).toEqual('1,70 €');
    expect(priceTime.getText()).toEqual('19,00 €');
  });

  it('10km, 10 hours, basic, C', function() {
    element(by.id('rateC')).click();

    expect(price.getText()).toEqual('24,80 €');
    expect(priceDistance.getText()).toEqual('1,80 €');
    expect(priceTime.getText()).toEqual('23,00 €');
  });

  it('10km, 10 hours, basic, D', function() {
    element(by.id('rateD')).click();

    expect(price.getText()).toEqual('32,50 €');
    expect(priceDistance.getText()).toEqual('2,50 €');
    expect(priceTime.getText()).toEqual('30,00 €');
  });

  it('10km, 10 hours, basic, F', function() {
    element(by.id('rateF')).click();

    expect(price.getText()).toEqual('40,70 €');
    expect(priceDistance.getText()).toEqual('2,70 €');
    expect(priceTime.getText()).toEqual('38,00 €');
  });

});
