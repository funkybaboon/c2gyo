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
    'carClassMini',
    'carClassBMW',
    'carClassMiniCabrioSummer',

    'airport.berlintegel',
    'airport.berlinschoenefeld',
    'airport.hamburg',
    'airport.muenchen',
    'airport.cologne',
    'airport.duesseldorf',
    'airport.wien',

    'drivecitytocity.duesseldorfcologne',
    'drivecitytocity.cologneduesseldorf',
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
