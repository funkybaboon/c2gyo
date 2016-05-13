describe('test stadtmobil input fields', function() {
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
    browser.get('http://localhost:9999/#/stadtmobil');
    browser.waitForAngular();

    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);
  });

  it('should calculate a price with all checkboxes ticked', function() {
    element(by.id('tariffclassic')).click();
    expect(price.getText()).toEqual('336,76 €');
    expect(priceDistance.getText()).toEqual('41,96 €');
    expect(priceTime.getText()).toEqual('294,80 €');

    element(by.id('tariffbasic')).click();
    expect(price.getText()).toEqual('379,16 €');
    expect(priceDistance.getText()).toEqual('43,96 €');
    expect(priceTime.getText()).toEqual('335,20 €');

    element(by.id('tariffstudi')).click();
    expect(price.getText()).toEqual('336,76 €');
    expect(priceDistance.getText()).toEqual('41,96 €');
    expect(priceTime.getText()).toEqual('294,80 €');

    element(by.id('tariffbusiness')).click();
    expect(price.getText()).toEqual('310,34 €');
    expect(priceDistance.getText()).toEqual('37,74 €');
    expect(priceTime.getText()).toEqual('272,60 €');

    element(by.id('rateB')).click();
    expect(price.getText()).toEqual('335,54 €');
    expect(priceDistance.getText()).toEqual('37,74 €');
    expect(priceTime.getText()).toEqual('297,80 €');

    element(by.id('rateC')).click();
    expect(price.getText()).toEqual('390,56 €');
    expect(priceDistance.getText()).toEqual('39,96 €');
    expect(priceTime.getText()).toEqual('350,60 €');

    element(by.id('rateD')).click();
    expect(price.getText()).toEqual('475,50 €');
    expect(priceDistance.getText()).toEqual('55,50 €');
    expect(priceTime.getText()).toEqual('420,00 €');

    element(by.id('rateF')).click();
    expect(price.getText()).toEqual('607,54 €');
    expect(priceDistance.getText()).toEqual('59,94 €');
    expect(priceTime.getText()).toEqual('547,60 €');
  });

  var popover = [
    'tariff.classic',
    'tariff.basic',
    'tariff.studi',
    'tariff.business',
    'carclass.RateA',
    'carclass.RateB',
    'carclass.RateC',
    'carclass.RateD',
    'carclass.RateF'
  ];

  popover.forEach(function(entry) {
    it('should display the popover-content on mouseover for ' + entry,
    function() {
      var path = 'span[tariff-popover="popover.stadtmobil.' + entry + '"]';
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
