describe('car2goblack test all input fields and checkboxes', function() {
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
    browser.get('http://localhost:9999/#/car2goblack');
    browser.waitForAngular();
  });

  it('should calculate a price with all input forms filled', function() {
    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);

    expect(price.getText()).toEqual('257,68 €');
    expect(priceDistance.getText()).toEqual('49,88 €');
    expect(priceTime.getText()).toEqual('207,80 €');

    // with all input forms
    element(by.model('rental.timeDays')).clear().sendKeys(7);
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);

    expect(price.getText()).toEqual('1.948,68 €');
    expect(priceDistance.getText()).toEqual('49,88 €');
    expect(priceTime.getText()).toEqual('1.898,80 €');
  });

  it('should calculate a price with all checkboxes ticked', function() {
    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);

    element(by.model('rental.car2goblack.airport')).click();

    expect(price.getText()).toEqual('262,58 €');
    expect(priceDistance.getText()).toEqual('49,88 €');
    expect(priceTime.getText()).toEqual('207,80 €');

    // with all input forms
    element(by.model('rental.timeDays')).clear().sendKeys(7);
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);

    expect(price.getText()).toEqual('1.953,58 €');
    expect(priceDistance.getText()).toEqual('49,88 €');
    expect(priceTime.getText()).toEqual('1.898,80 €');
  });

  it('should display the week input field if rental time is greater than 7 ' +
    'days', function() {
      expect(element(by.model('rental.timeWeeks')).isPresent()).toBe(false);
      element(by.model('rental.timeDays')).clear().sendKeys(8);
      expect(element(by.model('rental.timeWeeks')).isPresent()).toBe(true);
      element(by.model('rental.timeDays')).clear().sendKeys(6);
      expect(element(by.model('rental.timeWeeks')).isPresent()).toBe(false);
    });

  it('should display the popover-content on mouseover', function() {
    var path = 'span[tariff-popover="popover.car2goblack.airport"]';
    var pathIcon =  path + ' > .fa.fa-info-circle';
    var pathPopover = path + '> .popover.ng-isolate-scope.right.fade.in';
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
