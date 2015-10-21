describe('car2go test all input fields and checkboxes', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/car2go');
    browser.waitForAngular();
  });

  it('should calculate a price with all input forms filled', function() {
    element(by.model('rental.timeMinutes')).clear().sendKeys(2);
    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeStanding')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);

    expect(price.getText()).toEqual('198,64 €');
    expect(priceDistance.getText()).toEqual('49,88 €');
    expect(priceTime.getText()).toEqual('148,76 €');

    // with all input forms
    element(by.model('rental.timeDays')).clear().sendKeys(7);
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);

    expect(price.getText()).toEqual('1.319,64 €');
    expect(priceDistance.getText()).toEqual('49,88 €');
    expect(priceTime.getText()).toEqual('1.269,76 €');
  });

  it('should calculate a price with all checkboxes ticked', function() {
    element(by.model('rental.timeMinutes')).clear().sendKeys(2);
    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
    element(by.model('rental.timeStanding')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);

    element(by.model('rental.airport.car2go')).click();

    expect(price.getText()).toEqual('203,54 €');
    expect(priceDistance.getText()).toEqual('49,88 €');
    expect(priceTime.getText()).toEqual('148,76 €');

    // with all input forms
    element(by.model('rental.timeDays')).clear().sendKeys(7);
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);

    expect(price.getText()).toEqual('1.324,54 €');
    expect(priceDistance.getText()).toEqual('49,88 €');
    expect(priceTime.getText()).toEqual('1.269,76 €');
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
    var pathIcon = 'span[tariff-popover="views/popovers/car2go/airport.html"]' +
      ' > .fa.fa-info-circle';
    var pathPopover = 'span[tariff-popover="views/popovers/car2go/airport.html"] ' +
      '> .popover.ng-isolate-scope.right.fade.in';

    var popoverIcon = element(by.css(pathIcon));
    browser.actions().mouseMove(popoverIcon).perform();
    var popover = element(by.css(pathPopover));

    expect(popover.isDisplayed()).toBeTruthy();
  });
});
