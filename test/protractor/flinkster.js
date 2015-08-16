describe('test flinkster customization', function() {
  beforeEach(function() {
    browser.get('http://localhost:9999/#/flinkster');
  });


  it('tariff "lokal" should not have an airport checkbox', function() {
    expect(element(by.model('rental.airport.flinkster')).isPresent()).toBe(true);

    element(by.id('tarifflokal')).click();

    expect(element(by.model('rental.airport.flinkster')).isPresent()).toBe(false);
  });

});
