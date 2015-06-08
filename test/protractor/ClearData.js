describe('Keep State over different tabs', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/sm');
  });


  it('should keep the duration at 1 week, 10 hours, 100km', function() {
    element(by.model('rental.timeWeeks')).clear().sendKeys(3);
    element(by.id('clear')).click();

    expect(price.getText()).toEqual('0,00 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('0,00 €');

    element(by.id('c2g')).click();
    expect(price.getText()).toEqual('0,00 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('0,00 €');

    element(by.id('c2gb')).click();
    expect(price.getText()).toEqual('0,00 €');
    expect(priceDistance.getText()).toEqual('0,00 €');
    expect(priceTime.getText()).toEqual('0,00 €');
  });

});
