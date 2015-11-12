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
    element(by.model('rental.timeWeeks')).clear().sendKeys(2);
    element(by.model('rental.distance')).clear().sendKeys(222);

  });

  var popover = [
    'carClassMini',
    'carClassBMW',
    'carClassMiniCabrioSummer',

    'airport.berlintegel',
    'airport.berlinschoenefeld',
    'airport.hamburg',
    'airport.muenchen',
    'airport.koeln',
    'airport.duesseldorf',
    'airport.wien',

    'drivecitytocity.duesseldorfkoeln',
    'drivecitytocity.koelnduesseldorf',
    'drivecitytocity.hildengerresheim',
    'drivecitytocity.neubibergbavariafilmstadt'
  ];

  popover.forEach(function(entry){
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
    });
  });

});
