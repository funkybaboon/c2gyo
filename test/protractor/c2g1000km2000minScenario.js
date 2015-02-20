describe('c2g test', function() {
  var price = element(by.binding('price'));
  var getDays = element(by.binding('getDays'));
  var getFeeDays = element(by.binding('getFeeDays'));
  var getHours = element(by.binding('getHours'));
  var getFeeHours = element(by.binding('getFeeHours'));
  var getMinutes = element(by.binding('getMinutes'));
  var getFeeMinutes = element(by.binding('getFeeMinutes'));
  var getFreeKm = element(by.binding('getFreeKm'));
  var getAdditionalKm = element(by.binding('getAdditionalKm'));
  var getfeeAdditionalKm = element(by.binding('getfeeAdditionalKm'));
  var getFeeStanding = element(by.binding('getFeeStanding'));
  var getFeeAirport = element(by.binding('getFeeAirport'));
  var msgRoundDownToHours = element(by.binding('msgRoundDownToHours'));
  var msgRoundDownToDays = element(by.binding('msgRoundDownToDays'));
  var showMsgRoundDownToHours = element(by.css('span.MsgRoundDownToHours'));
  var showMsgRoundDownToDays = element(by.css('span.MsgRoundDownToDays'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/c2g');
  });

  // 10km and 2000 minutes)
  it('1000km, 2000 minutes', function() {
    element(by.model('timeMinutes')).clear().sendKeys(2000);
    element(by.model('distance')).clear().sendKeys(1000);

    //Preis
    expect(price.getText()).toEqual('350,00 €');

    //Zeit
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');
    expect(getHours.getText()).toEqual('9');
    expect(getFeeHours.getText()).toEqual('59,00 €');
    expect(getDays.getText()).toEqual('1');
    expect(getFeeDays.getText()).toEqual('118,00 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('200');
    expect(getAdditionalKm.getText()).toEqual('800');
    expect(getfeeAdditionalKm.getText()).toEqual('232,00 €');

    //Sonstiges
    expect(getFeeStanding.getText()).toEqual('0,00 €');
    expect(getFeeAirport.getText()).toEqual('0,00 €');

    //msg to round down
    expect(
      msgRoundDownToHours.getText()).toEqual('(abgerundet auf Tagesgebühr)');
    expect(
      msgRoundDownToDays.getText()).toEqual('(abgerundet auf Tagesgebühr)');

    expect(showMsgRoundDownToHours.isDisplayed()).toBe(true);
    expect(showMsgRoundDownToDays.isDisplayed()).toBe(true);
  });

  it('1000km, 2000 minutes, airport fee', function() {
    element(by.model('airport')).click();
    element(by.model('timeMinutes')).clear().sendKeys(2000);
    element(by.model('distance')).clear().sendKeys(1000);

    //Preis
    expect(price.getText()).toEqual('354,90 €');

    //Zeit
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');
    expect(getHours.getText()).toEqual('9');
    expect(getFeeHours.getText()).toEqual('59,00 €');
    expect(getDays.getText()).toEqual('1');
    expect(getFeeDays.getText()).toEqual('118,00 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('200');
    expect(getAdditionalKm.getText()).toEqual('800');
    expect(getfeeAdditionalKm.getText()).toEqual('232,00 €');

    //Sonstiges
    expect(getFeeStanding.getText()).toEqual('0,00 €');
    expect(getFeeAirport.getText()).toEqual('4,90 €');

    //msg to round down
    expect(
      msgRoundDownToHours.getText()).toEqual('(abgerundet auf Tagesgebühr)');
    expect(
      msgRoundDownToDays.getText()).toEqual('(abgerundet auf Tagesgebühr)');
  });

  it('10km, 2000 minutes, 10 standing minutes', function() {
    element(by.model('timeStanding')).clear().sendKeys(10);
    element(by.model('timeMinutes')).clear().sendKeys(2000);
    element(by.model('distance')).clear().sendKeys(1000);

    //Preis
    expect(price.getText()).toEqual('351,90 €');

    //Zeit
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');
    expect(getHours.getText()).toEqual('9');
    expect(getFeeHours.getText()).toEqual('59,00 €');
    expect(getDays.getText()).toEqual('1');
    expect(getFeeDays.getText()).toEqual('118,00 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('200');
    expect(getAdditionalKm.getText()).toEqual('800');
    expect(getfeeAdditionalKm.getText()).toEqual('232,00 €');

    //Sonstiges
    expect(getFeeStanding.getText()).toEqual('1,90 €');
    expect(getFeeAirport.getText()).toEqual('0,00 €');

    //msg to round down
    expect(
      msgRoundDownToHours.getText()).toEqual('(abgerundet auf Tagesgebühr)');
    expect(
      msgRoundDownToDays.getText()).toEqual('(abgerundet auf Tagesgebühr)');

    expect(showMsgRoundDownToHours.isDisplayed()).toBe(true);
    expect(showMsgRoundDownToDays.isDisplayed()).toBe(true);
  });

  it('10km, 2000 minutes, 10 standing minutes, airport fee', function() {
    element(by.model('airport')).click();
    element(by.model('timeStanding')).clear().sendKeys(10);
    element(by.model('timeMinutes')).clear().sendKeys(2000);
    element(by.model('distance')).clear().sendKeys(1000);

    //Preis
    expect(price.getText()).toEqual('356,80 €');

    //Zeit
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');
    expect(getHours.getText()).toEqual('9');
    expect(getFeeHours.getText()).toEqual('59,00 €');
    expect(getDays.getText()).toEqual('1');
    expect(getFeeDays.getText()).toEqual('118,00 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('200');
    expect(getAdditionalKm.getText()).toEqual('800');
    expect(getfeeAdditionalKm.getText()).toEqual('232,00 €');

    //Sonstiges
    expect(getFeeStanding.getText()).toEqual('1,90 €');
    expect(getFeeAirport.getText()).toEqual('4,90 €');

    //msg to round down
    expect(
      msgRoundDownToHours.getText()).toEqual('(abgerundet auf Tagesgebühr)');
    expect(
      msgRoundDownToDays.getText()).toEqual('(abgerundet auf Tagesgebühr)');

    expect(showMsgRoundDownToHours.isDisplayed()).toBe(true);
    expect(showMsgRoundDownToDays.isDisplayed()).toBe(true);
  });
});
