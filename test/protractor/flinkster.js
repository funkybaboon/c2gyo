describe('test flinkster customization', function() {
  beforeEach(function() {
    browser.get('http://localhost:9999/#/flinkster');
  });

  fit('tariff "lokal" should not have an airport checkbox', function() {
    element(by.id('tarifflokal')).click();

    expect(element(by.model('rental.airport')).isDisplayed()).toBe(false);
  });

});
