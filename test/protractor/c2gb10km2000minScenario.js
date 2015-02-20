describe('c2gb test', function() {
  var price = element(by.binding('price'));
  var getDays = element(by.binding('getDays'));
  var getFeeDays = element(by.binding('getFeeDays'));
  var getHours = element(by.binding('getHours'));
  var getFeeHours = element(by.binding('getFeeHours'));
  var getFreeKm = element(by.binding('getFreeKm'));
  var getAdditionalKm = element(by.binding('getAdditionalKm'));
  var getfeeAdditionalKm = element(by.binding('getfeeAdditionalKm'));
  var getFeeAirport = element(by.binding('getFeeAirport'));
  var msgRoundDownToDays = element(by.binding('msgRoundDownToDays'));
  var showMsgRoundDownToDays = element(by.css('span.MsgRoundDownToDays'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/c2gb');
  });

  it('10km, 2000 minutes', function() {
    element(by.model('timeMinutes')).clear().sendKeys(2000);

    //Preis
    expect(price.getText()).toEqual('178,00 €');

    //Zeit
    expect(getDays.getText()).toEqual('1');
    expect(getFeeDays.getText()).toEqual('89,00 €');
    expect(getHours.getText()).toEqual('10');
    expect(getFeeHours.getText()).toEqual('89,00 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('400');
    expect(getAdditionalKm.getText()).toEqual('0');
    expect(getfeeAdditionalKm.getText()).toEqual('0,00 €');

    //Sonstiges
    expect(getFeeAirport.getText()).toEqual('0,00 €');

    //msg to round down
    expect(
      msgRoundDownToDays.getText()).toEqual('(abgerundet auf Tagesgebühr)');

    expect(showMsgRoundDownToDays.isDisplayed()).toBe(true);
  });

  it('10km, 2000 minutes, airport fee', function() {
    element(by.model('timeMinutes')).clear().sendKeys(2000);
    element(by.model('airport')).click();

    //Preis
    expect(price.getText()).toEqual('182,90 €');

    //Zeit
    expect(getDays.getText()).toEqual('1');
    expect(getFeeDays.getText()).toEqual('89,00 €');
    expect(getHours.getText()).toEqual('10');
    expect(getFeeHours.getText()).toEqual('89,00 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('400');
    expect(getAdditionalKm.getText()).toEqual('0');
    expect(getfeeAdditionalKm.getText()).toEqual('0,00 €');

    //Sonstiges
    expect(getFeeAirport.getText()).toEqual('4,90 €');

    //msg to round down
    expect(
      msgRoundDownToDays.getText()).toEqual('(abgerundet auf Tagesgebühr)');

    expect(showMsgRoundDownToDays.isDisplayed()).toBe(true);
  });
});
