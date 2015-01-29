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

  // 100km and 20 minutes)
  it('100km, 20 minutes', function() {
    element(by.model('distance')).clear().sendKeys(100);

    //Preis
    expect(price.getText()).toEqual('20,30 €');

    //Zeit
    expect(getDays.getText()).toEqual('0');
    expect(getFeeDays.getText()).toEqual('0,00 €');
    expect(getHours.getText()).toEqual('0');
    expect(getFeeHours.getText()).toEqual('0,00 €');
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('50');
    expect(getAdditionalKm.getText()).toEqual('50');
    expect(getfeeAdditionalKm.getText()).toEqual('14,50 €');

    //Sonstiges
    expect(getFeeStanding.getText()).toEqual('0,00 €');
    expect(getFeeAirport.getText()).toEqual('0,00 €');

    //msg to round down
    expect(
      msgRoundDownToHours.getText()).toEqual('');
    expect(
      msgRoundDownToDays.getText()).toEqual('');

    expect(showMsgRoundDownToHours.isDisplayed()).toBe(false);
    expect(showMsgRoundDownToDays.isDisplayed()).toBe(false);
  });

  it('100km, 20 minutes, airport fee', function() {
    element(by.model('airport')).click();
    element(by.model('distance')).clear().sendKeys(100);

    //Preis
    expect(price.getText()).toEqual('25,20 €');

    //Zeit
    expect(getDays.getText()).toEqual('0');
    expect(getFeeDays.getText()).toEqual('0,00 €');
    expect(getHours.getText()).toEqual('0');
    expect(getFeeHours.getText()).toEqual('0,00 €');
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('50');
    expect(getAdditionalKm.getText()).toEqual('50');
    expect(getfeeAdditionalKm.getText()).toEqual('14,50 €');

    //Sonstiges
    expect(getFeeStanding.getText()).toEqual('0,00 €');
    expect(getFeeAirport.getText()).toEqual('4,90 €');

    //msg to round down
    expect(
      msgRoundDownToHours.getText()).toEqual('');
    expect(
      msgRoundDownToDays.getText()).toEqual('');

    expect(showMsgRoundDownToHours.isDisplayed()).toBe(false);
    expect(showMsgRoundDownToDays.isDisplayed()).toBe(false);
  });

  it('100km, 20 minutes, 10 standing minutes', function() {
    element(by.model('timeStanding')).clear().sendKeys(10);
    element(by.model('distance')).clear().sendKeys(100);

    //Preis
    expect(price.getText()).toEqual('22,20 €');

    //Zeit
    expect(getDays.getText()).toEqual('0');
    expect(getFeeDays.getText()).toEqual('0,00 €');
    expect(getHours.getText()).toEqual('0');
    expect(getFeeHours.getText()).toEqual('0,00 €');
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('50');
    expect(getAdditionalKm.getText()).toEqual('50');
    expect(getfeeAdditionalKm.getText()).toEqual('14,50 €');

    //Sonstiges
    expect(getFeeStanding.getText()).toEqual('1,90 €');
    expect(getFeeAirport.getText()).toEqual('0,00 €');

    //msg to round down
    expect(
      msgRoundDownToHours.getText()).toEqual('');
    expect(
      msgRoundDownToDays.getText()).toEqual('');

    expect(showMsgRoundDownToHours.isDisplayed()).toBe(false);
    expect(showMsgRoundDownToDays.isDisplayed()).toBe(false);
  });

  it('100km, 20 minutes, 10 standing minutes, airport fee', function() {
    element(by.model('airport')).click();
    element(by.model('timeStanding')).clear().sendKeys(10);
    element(by.model('distance')).clear().sendKeys(100);

    //Preis
    expect(price.getText()).toEqual('27,10 €');

    //Zeit
    expect(getDays.getText()).toEqual('0');
    expect(getFeeDays.getText()).toEqual('0,00 €');
    expect(getHours.getText()).toEqual('0');
    expect(getFeeHours.getText()).toEqual('0,00 €');
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('50');
    expect(getAdditionalKm.getText()).toEqual('50');
    expect(getfeeAdditionalKm.getText()).toEqual('14,50 €');

    //Sonstiges
    expect(getFeeStanding.getText()).toEqual('1,90 €');
    expect(getFeeAirport.getText()).toEqual('4,90 €');

    //msg to round down
    expect(
      msgRoundDownToHours.getText()).toEqual('');
    expect(
      msgRoundDownToDays.getText()).toEqual('');

    expect(showMsgRoundDownToHours.isDisplayed()).toBe(false);
    expect(showMsgRoundDownToDays.isDisplayed()).toBe(false);
  });
});
