'use strict';

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
    element(by.id('tariff.basic')).click();
    expect(price.getText()).toEqual('543,50 €');
    expect(priceDistance.getText()).toEqual('55,50 €');
    expect(priceTime.getText()).toEqual('486,00 €');

    element(by.id('tariff.komfort')).click();
    expect(price.getText()).toEqual('505,10 €');
    expect(priceDistance.getText()).toEqual('33,30 €');
    expect(priceTime.getText()).toEqual('469,80 €');

    element(by.id('tariff.abo')).click();
    expect(price.getText()).toEqual('278,30 €');
    expect(priceDistance.getText()).toEqual('33,30 €');
    expect(priceTime.getText()).toEqual('243,00 €');

    element(by.id('carclass.cityflitzer')).click();
    expect(price.getText()).toEqual('421,30 €');
    expect(priceDistance.getText()).toEqual('33,30 €');
    expect(priceTime.getText()).toEqual('386,00 €');

    element(by.id('carclass.xs')).click();
    expect(price.getText()).toEqual('278,30 €');
    expect(priceDistance.getText()).toEqual('33,30 €');
    expect(priceTime.getText()).toEqual('243,00 €');

    element(by.id('carclass.s')).click();
    expect(price.getText()).toEqual('347,54 €');
    expect(priceDistance.getText()).toEqual('37,74 €');
    expect(priceTime.getText()).toEqual('307,80 €');

    element(by.id('carclass.m')).click();
    expect(price.getText()).toEqual('449,18 €');
    expect(priceDistance.getText()).toEqual('42,18 €');
    expect(priceTime.getText()).toEqual('405,00 €');

    element(by.id('carclass.l')).click();
    expect(price.getText()).toEqual('682,64 €');
    expect(priceDistance.getText()).toEqual('48,84 €');
    expect(priceTime.getText()).toEqual('631,80 €');

    element(by.id('carclass.reisexs')).click();
    expect(price.getText()).toEqual('278,30 €');
    expect(priceDistance.getText()).toEqual('33,30 €');
    expect(priceTime.getText()).toEqual('243,00 €');

    element(by.id('carclass.reises')).click();
    expect(price.getText()).toEqual('347,54 €');
    expect(priceDistance.getText()).toEqual('37,74 €');
    expect(priceTime.getText()).toEqual('307,80 €');

    element(by.id('carclass.m')).click();
    expect(price.getText()).toEqual('449,18 €');
    expect(priceDistance.getText()).toEqual('42,18 €');
    expect(priceTime.getText()).toEqual('405,00 €');

    element(by.id('carclass.l')).click();
    expect(price.getText()).toEqual('682,64 €');
    expect(priceDistance.getText()).toEqual('48,84 €');
    expect(priceTime.getText()).toEqual('631,80 €');

  });

  var popover = [
    'tariff.basic',
    'tariff.komfort',
    'tariff.abo',
    'carclass.cityflitzer',
    'carclass.xs',
    'carclass.s',
    'carclass.m',
    'carclass.l',
    'carclass.reisexs',
    'carclass.reises',
    'carclass.reisem',
    'carclass.reisel'
  ];

  popover.forEach(function(entry) {
    it('should display the popover-content on mouseover for ' + entry,
    function() {
      var path = 'span[tariff-popover="popover.bookndrive.' + entry + '"]';
      var pathIcon =  path + ' > .fa.fa-info-circle';
      var pathPopover = path + ' > .popover.ng-isolate-scope.right.fade.in';
      var popoverIcon = element(by.css(pathIcon));
      var popover = element(by.css(pathPopover));

      browser.actions().mouseMove(popoverIcon).perform();
      browser.wait(EC.visibilityOf(popover), browser.params.timeout);
      browser.wait(
        patternToBePresentInElement(popover, browser.params.regexNotEmpty),
        browser.params.timeout
        );
    });
  });
});
