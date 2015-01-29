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

  // default (10km and 20 minutes)
  it('10km, 20 minutes', function() {
    //Preis
    expect(price.getText()).toEqual('14,90 €');

    //Zeit
    expect(getDays.getText()).toEqual('0');
    expect(getFeeDays.getText()).toEqual('0,00 €');
    expect(getHours.getText()).toEqual('1');
    expect(getFeeHours.getText()).toEqual('14,90 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('50');
    expect(getAdditionalKm.getText()).toEqual('0');
    expect(getfeeAdditionalKm.getText()).toEqual('0,00 €');

    //Sonstiges
    expect(getFeeAirport.getText()).toEqual('0,00 €');

    //msg to round down
    expect(
      msgRoundDownToDays.getText()).toEqual('');

    expect(showMsgRoundDownToDays.isDisplayed()).toBe(false);
  });

  it('10km, 20 minutes, airport fee', function() {
    element(by.model('airport')).click();
    //Preis
    expect(price.getText()).toEqual('19,80 €');

    //Zeit
    expect(getDays.getText()).toEqual('0');
    expect(getFeeDays.getText()).toEqual('0,00 €');
    expect(getHours.getText()).toEqual('1');
    expect(getFeeHours.getText()).toEqual('14,90 €');

    //Distanz
    expect(getFreeKm.getText()).toEqual('50');
    expect(getAdditionalKm.getText()).toEqual('0');
    expect(getfeeAdditionalKm.getText()).toEqual('0,00 €');

    //Sonstiges
    expect(getFeeAirport.getText()).toEqual('4,90 €');

    //msg to round down
    expect(
      msgRoundDownToDays.getText()).toEqual('');

    expect(showMsgRoundDownToDays.isDisplayed()).toBe(false);
  });
});
