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

  // default (10km and 20 minutes)
  it('10km, 20 minutes', function() {
    //Preis
    expect(price.getText()).toEqual('5,80 €');

    //Zeit
    expect(getDays.getText()).toEqual('0');
    expect(getFeeDays.getText()).toEqual('0,00 €');
    expect(getHours.getText()).toEqual('0');
    expect(getFeeHours.getText()).toEqual('0,00 €');
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('50');
    expect(getAdditionalKm.getText()).toEqual('0');
    expect(getfeeAdditionalKm.getText()).toEqual('0,00 €');

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

  it('10km, 20 minutes, airport fee', function() {
    element(by.model('airport')).click();

    //Preis
    expect(price.getText()).toEqual('10,70 €');

    //Zeit
    expect(getDays.getText()).toEqual('0');
    expect(getFeeDays.getText()).toEqual('0,00 €');
    expect(getHours.getText()).toEqual('0');
    expect(getFeeHours.getText()).toEqual('0,00 €');
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('50');
    expect(getAdditionalKm.getText()).toEqual('0');
    expect(getfeeAdditionalKm.getText()).toEqual('0,00 €');

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

  it('10km, 20 minutes, 10 standing minutes', function() {
    element(by.model('timeStanding')).clear().sendKeys(10);

    //Preis
    expect(price.getText()).toEqual('7,70 €');

    //Zeit
    expect(getDays.getText()).toEqual('0');
    expect(getFeeDays.getText()).toEqual('0,00 €');
    expect(getHours.getText()).toEqual('0');
    expect(getFeeHours.getText()).toEqual('0,00 €');
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('50');
    expect(getAdditionalKm.getText()).toEqual('0');
    expect(getfeeAdditionalKm.getText()).toEqual('0,00 €');

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

  it('10km, 20 minutes, 10 standing minutes, airport fee', function() {
    element(by.model('airport')).click();
    element(by.model('timeStanding')).clear().sendKeys(10);

    //Preis
    expect(price.getText()).toEqual('12,60 €');

    //Zeit
    expect(getDays.getText()).toEqual('0');
    expect(getFeeDays.getText()).toEqual('0,00 €');
    expect(getHours.getText()).toEqual('0');
    expect(getFeeHours.getText()).toEqual('0,00 €');
    expect(getMinutes.getText()).toEqual('20');
    expect(getFeeMinutes.getText()).toEqual('5,80 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('50');
    expect(getAdditionalKm.getText()).toEqual('0');
    expect(getfeeAdditionalKm.getText()).toEqual('0,00 €');

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
