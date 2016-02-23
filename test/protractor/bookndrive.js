describe('test bookndrive input fields', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  var EC = protractor.ExpectedConditions;
  var patternToBePresentInElement = function(elementFinder, pattern) {
    var matchesPattern = function() {
      return elementFinder.getText().then(function(actualText) {
        return actualText.search(pattern) !== -1;
      });
    };
    return EC.and(EC.presenceOf(elementFinder), matchesPattern);
  };

  beforeEach(function() {
    browser.get('http://localhost:9999/#/bookndrive');
    browser.waitForAngular();

    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);
  });

  it('should calculate a price with all checkboxes ticked', function() {
    element(by.id('tariffbasic')).click();
    expect(price.getText()).toEqual('543,50 €');
    expect(priceDistance.getText()).toEqual('55,50 €');
    expect(priceTime.getText()).toEqual('486,00 €');

    element(by.id('tariffkomfort')).click();
    expect(price.getText()).toEqual('505,10 €');
    expect(priceDistance.getText()).toEqual('33,30 €');
    expect(priceTime.getText()).toEqual('469,80 €');

    element(by.id('tariffabo')).click();
    expect(price.getText()).toEqual('278,30 €');
    expect(priceDistance.getText()).toEqual('33,30 €');
    expect(priceTime.getText()).toEqual('243,00 €');

    element(by.id('ratecityflitzer')).click();
    expect(price.getText()).toEqual('421,30 €');
    expect(priceDistance.getText()).toEqual('33,30 €');
    expect(priceTime.getText()).toEqual('386,00 €');

    element(by.id('ratexs')).click();
    expect(price.getText()).toEqual('278,30 €');
    expect(priceDistance.getText()).toEqual('33,30 €');
    expect(priceTime.getText()).toEqual('243,00 €');

    element(by.id('rates')).click();
    expect(price.getText()).toEqual('347,54 €');
    expect(priceDistance.getText()).toEqual('37,74 €');
    expect(priceTime.getText()).toEqual('307,80 €');

    element(by.id('ratem')).click();
    expect(price.getText()).toEqual('449,18 €');
    expect(priceDistance.getText()).toEqual('42,18 €');
    expect(priceTime.getText()).toEqual('405,00 €');

    element(by.id('ratel')).click();
    expect(price.getText()).toEqual('682,64 €');
    expect(priceDistance.getText()).toEqual('48,84 €');
    expect(priceTime.getText()).toEqual('631,80 €');

    element(by.id('ratereisexs')).click();
    expect(price.getText()).toEqual('278,30 €');
    expect(priceDistance.getText()).toEqual('33,30 €');
    expect(priceTime.getText()).toEqual('243,00 €');

    element(by.id('ratereises')).click();
    expect(price.getText()).toEqual('347,54 €');
    expect(priceDistance.getText()).toEqual('37,74 €');
    expect(priceTime.getText()).toEqual('307,80 €');

    element(by.id('ratem')).click();
    expect(price.getText()).toEqual('449,18 €');
    expect(priceDistance.getText()).toEqual('42,18 €');
    expect(priceTime.getText()).toEqual('405,00 €');

    element(by.id('ratel')).click();
    expect(price.getText()).toEqual('682,64 €');
    expect(priceDistance.getText()).toEqual('48,84 €');
    expect(priceTime.getText()).toEqual('631,80 €');

  });


});
