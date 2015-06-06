describe('Keep State over different tabs', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/sm');
  });


  it('should keep the duration at 1 week, 10 hours, 100km', function() {
    element(by.model('rental.timeWeeks')).clear().sendKeys(1);
    element(by.model('rental.distance')).clear().sendKeys(100);

    expect(price.getText()).toEqual('159,00 €');
    expect(priceDistance.getText()).toEqual('20,00 €');
    expect(priceTime.getText()).toEqual('139,00 €');

    element(by.id('c2g')).click();
    expect(price.getText()).toEqual('486,50 €');
    expect(priceDistance.getText()).toEqual('14,50 €');
    expect(priceTime.getText()).toEqual('472,00 €');

    element(by.id('c2gb')).click();
    expect(price.getText()).toEqual('726,50 €');
    expect(priceDistance.getText()).toEqual('14,50 €');
    expect(priceTime.getText()).toEqual('712,00 €');

  });

});
