var vendor = 'drivenow'

describe('drivenow test all input fields and checkboxes', function() {
  var price = element(by.id('price'));
  var priceDistance = element(by.id('priceDistance'));
  var priceTime = element(by.id('priceTime'));

  beforeEach(function() {
    browser.get('http://localhost:9999/#/'+ vendor);
    browser.waitForAngular();

    element(by.model('rental.timeHours')).clear().sendKeys(2);
    element(by.model('rental.timeDays')).clear().sendKeys(2);
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
    ['carClassMini','930,00 €','0,00 €','930,00 €'],
    ['carClassBMW','1.020,00 €','0,00 €','1.020,00 €'],
    ['carClassMiniCabrioSummer','930,00 €','0,00 €','930,00 €'],
    ['carClassMiniCabrioWinter','1.020,00 €','0,00 €','1.020,00 €'],

    ['airport.berlintegel','934,00 €','0,00 €','930,00 €'],
    ['airport.berlinschoenefeld','940,00 €','0,00 €','930,00 €'],
    ['airport.hamburg','945,00 €','0,00 €','930,00 €'],
    ['airport.munich','957,00 €','0,00 €','930,00 €'],
    ['airport.cologne','961,00 €','0,00 €','930,00 €'],
    ['airport.duesseldorf','967,00 €','0,00 €','930,00 €'],
    ['airport.wien','977,00 €','0,00 €','930,00 €'],

    ['drivecitytocity.duesseldorfcologne','987,00 €','0,00 €','930,00 €'],
    ['drivecitytocity.cologneduesseldorf','993,00 €','0,00 €','930,00 €'],
    ['drivecitytocity.hildengerresheim','996,00 €','0,00 €','930,00 €'],
    ['drivecitytocity.neubibergbavariafilmstadt','999,00 €','0,00 €','930,00 €']
  ];

  popover.forEach(function(entry){
    entry = entry[0];
    it('should display the popover-content of ' + entry +
    ' on mouseover', function() {
      var pathIcon = 'span[tariff-popover=' +
        '"views/popovers/' + vendor + '/' + entry + '.html"]' +
        ' > .fa.fa-info-circle';
      var pathPopover = 'span[tariff-popover=' +
        '"views/popovers/' + vendor + '/' + entry + '.html"] ' +
        '> .popover.ng-isolate-scope.right.fade.in';

      var popoverIcon = element(by.css(pathIcon));
      browser.actions().mouseMove(popoverIcon).perform();
      var popover = element(by.css(pathPopover));
      expect(popover.isDisplayed()).toBeTruthy();
      expect(popover.getText()).toMatch(browser.params.regexNotEmpty);
    });
  });

  it('should calculate a price with all checkboxes ticked', function() {
    var checkboxes = popover.splice(4);
    checkboxes.forEach(function(entry){
      var drivenowModel = 'rental.drivenow.' + entry[0];
      var drivenowPrice = entry[1];
      var drivenowPriceDistance = entry[2];
      var drivenowPriceTime = entry[3];

      element(by.model(drivenowModel)).click();
      expect(price.getText()).toEqual(drivenowPrice);
      expect(priceDistance.getText()).toEqual(drivenowPriceDistance);
      expect(priceTime.getText()).toEqual(drivenowPriceTime);

    });
  });

  it('should calculate a price with all tariffs chosen', function() {
    var tariffs = popover.splice(0,3);
    tariffs.forEach(function(entry){
      var drivenowModel = entry[0];
      var drivenowPrice = entry[1];
      var drivenowPriceDistance = entry[2];
      var drivenowPriceTime = entry[3];

      element(by.id(drivenowModel)).click();
      expect(price.getText()).toEqual(drivenowPrice);
      expect(priceDistance.getText()).toEqual(drivenowPriceDistance);
      expect(priceTime.getText()).toEqual(drivenowPriceTime);

    });
  });




});
