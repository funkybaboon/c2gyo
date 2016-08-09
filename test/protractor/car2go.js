'use strict';

var vendor = 'car2go';

describe('car2go test all input fields and checkboxes', function() {
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
    browser.get('http://localhost:9999/#/' + vendor);
    browser.waitForAngular();

    element(by.model('rental.timeMinutes')).clear().sendKeys(2);
    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeStanding')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);
  });

  it('should display the week input field if rental time is greater than 7 ' +
    'days', function() {
    expect(element(by.model('rental.timeWeeks')).isPresent()).toBe(false);
    element(by.model('rental.timeDays')).clear().sendKeys(8);
    expect(element(by.model('rental.timeWeeks')).isPresent()).toBe(true);
    element(by.model('rental.timeDays')).clear().sendKeys(6);
    expect(element(by.model('rental.timeWeeks')).isPresent()).toBe(false);
  });

  var popover = [
    ['carclass.smart','194,94 €','6,38 €','188,56 €'],
    ['carclass.mercedesbenz1','238,98 €','6,38 €','232,60 €'],
    ['carclass.mercedesbenz2','265,04 €','6,38 €','258,66 €'],

    ['airport.berlin','199,84 €','6,38 €','188,56 €'],
    ['airport.hamburg','204,74 €','6,38 €','188,56 €'],
    ['airport.cologne','209,64 €','6,38 €','188,56 €'],
    ['airport.duesseldorf','214,54 €','6,38 €','188,56 €'],
    ['airport.frankfurt','219,44 €','6,38 €','188,56 €'],
    ['airport.stuttgart','224,34 €','6,38 €','188,56 €'],
    ['airport.munich','236,34 €','6,38 €','188,56 €']
  ];

  popover.forEach(function(entry) {
    entry = entry[0];
    it('should display the popover-content of ' + entry + ' on mouseover',
    function() {
      var path = 'span[tariff-popover="popover.' + vendor + '.' + entry + '"]';
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

  it('should calculate a price with all checkboxes ticked', function() {
    var checkboxes = popover.splice(3);
    checkboxes.forEach(function(entry) {
      var Model = 'rental.'  + vendor + '.' + entry[0];
      var cssClass = '.' + Model.replace(/\./g, '-');
      var Price = entry[1];
      var PriceDistance = entry[2];
      var PriceTime = entry[3];

      element(by.css(cssClass)).click();
      expect(price.getText()).toEqual(Price);
      expect(priceDistance.getText()).toEqual(PriceDistance);
      expect(priceTime.getText()).toEqual(PriceTime);

    });
  });

  it('should calculate a price with all tariffs chosen', function() {
    var tariffs = popover.splice(0,2);
    tariffs.forEach(function(entry) {
      var Model = entry[0];
      var Price = entry[1];
      var PriceDistance = entry[2];
      var PriceTime = entry[3];

      element(by.id(Model)).click();
      expect(price.getText()).toEqual(Price);
      expect(priceDistance.getText()).toEqual(PriceDistance);
      expect(priceTime.getText()).toEqual(PriceTime);

    });
  });

});
