describe('test flinkster input fields', function() {
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
    browser.get('http://localhost:9999/#/flinkster');
    browser.waitForAngular();

    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);
  });

  it('should not display an airport checkbox on tariff "lokal"', function() {
    expect(element(by.model('rental.flinkster.airport')).isPresent()).toBe(true);
    element(by.id('tarifflokal')).click();
    expect(element(by.model('rental.flinkster.airport')).isPresent()).toBe(false);
  });

  it('should calculate a price with all input forms filled', function() {
    expect(price.getText()).toEqual('689,40 €');
    expect(priceDistance.getText()).toEqual('44,40 €');
    expect(priceTime.getText()).toEqual('645,00 €');
  });

  it('should calculate a price with all radio boxes ticked', function() {
    element(by.id('ratemini')).click();
    expect(price.getText()).toEqual('668,56 €');
    expect(priceDistance.getText()).toEqual('39,96 €');
    expect(priceTime.getText()).toEqual('628,60 €');

    element(by.id('rateklein')).click();
    expect(price.getText()).toEqual('849,96 €');
    expect(priceDistance.getText()).toEqual('39,96 €');
    expect(priceTime.getText()).toEqual('810,00 €');

    element(by.id('ratekompakt')).click();
    expect(price.getText()).toEqual('1.011,96 €');
    expect(priceDistance.getText()).toEqual('39,96 €');
    expect(priceTime.getText()).toEqual('972,00 €');

    element(by.id('ratemittel')).click();
    expect(price.getText()).toEqual('1.178,40 €');
    expect(priceDistance.getText()).toEqual('44,40 €');
    expect(priceTime.getText()).toEqual('1.134,00 €');

    element(by.id('ratetransporter')).click();
    expect(price.getText()).toEqual('1.340,40 €');
    expect(priceDistance.getText()).toEqual('44,40 €');
    expect(priceTime.getText()).toEqual('1.296,00 €');

    element(by.model('rental.flinkster.airport')).click();
    expect(price.getText()).toEqual('1.664,40 €');
    expect(priceDistance.getText()).toEqual('44,40 €');
    expect(priceTime.getText()).toEqual('1.620,00 €');

    element(by.id('tarifflokal')).click();
    expect(price.getText()).toEqual('652,88 €');
    expect(priceDistance.getText()).toEqual('64,38 €');
    expect(priceTime.getText()).toEqual('588,50 €');
  });

  var popover = [
    'tariff.bundesweit',
    'tariff.lokal',
    'carclass.Sonder',
    'carclass.Mini',
    'carclass.Klein',
    'carclass.Kompakt',
    'carclass.Mittel',
    'carclass.Transporter',
    'airport'
  ];

  popover.forEach(function(entry) {
    it('should display the popover-content of ' + entry +
    ' on mouseover', function() {
      var path = 'span[tariff-popover="popover.flinkster.' + entry + '"]';
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
