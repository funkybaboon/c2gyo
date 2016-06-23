'use strict';

describe('greenwheels test all input fields and checkboxes', function() {
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
    browser.get('http://localhost:9999/#/greenwheels');
    browser.waitForAngular();

    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);

  });

  it('should calculate a price with all input forms filled', function() {
    expect(price.getText()).toEqual('693,42 €');
    expect(priceDistance.getText()).toEqual('53,28 €');
    expect(priceTime.getText()).toEqual('640,14 €');
  });

  it('should calculate a price with all checkboxes ticked', function() {
    element(by.id('carclass.van')).click();
    expect(price.getText()).toEqual('1.231,62 €');
    expect(priceDistance.getText()).toEqual('75,48 €');
    expect(priceTime.getText()).toEqual('1.156,14 €');

    element(by.id('tariff.joker')).click();
    expect(price.getText()).toEqual('723,46 €');
    expect(priceDistance.getText()).toEqual('75,48 €');
    expect(priceTime.getText()).toEqual('647,98 €');

    element(by.id('carclass.compact')).click();
    expect(price.getText()).toEqual('537,26 €');
    expect(priceDistance.getText()).toEqual('53,28 €');
    expect(priceTime.getText()).toEqual('483,98 €');
  });

  var popover = [
    'tariff.standard',
    'tariff.joker',
    'carclass.compact',
    'carclass.van'
  ];

  popover.forEach(function(entry) {
    it('should display the popover-content of ' + entry +
    ' on mouseover', function() {
      var path = 'span[tariff-popover="popover.greenwheels.' + entry + '"]';
      var pathIcon = path + ' > .fa.fa-info-circle';
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
