angular.module("c2gyoApp").run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('views/billedBox.html',
    "<h2>Abgerechnete Zeit</h2>\n" +
    "<div ng-show=\"{{isResolution('minutes')}}\">\n" +
    "  {{ getMinutesBilled( timeMinutes ) }} Minuten\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('hours')}}\">\n" +
    "  {{ getHoursBilled( timeMinutes ) }} Stunden\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('days')}}\">\n" +
    "  {{ getDaysBilled( timeMinutes ) }} Tage\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('weeks')}}\">\n" +
    "  {{ getWeeksBilled( timeMinutes ) }} Wochen\n" +
    "</div>\n" +
    "\n" +
    "<h2>Wahre Zeit</h2>\n" +
    "<div ng-show=\"{{isResolution('minutes')}}\">\n" +
    "  {{ getMinutes( timeMinutes ) }} Minuten\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('hours')}}\">\n" +
    "  {{ getHours( timeMinutes ) }} Stunden\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('days')}}\">\n" +
    "  {{ getDays( timeMinutes ) }} Tage\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('weeks')}}\">\n" +
    "  {{ getWeeks( timeMinutes ) }} Wochen\n" +
    "</div>\n"
  );


  $templateCache.put('views/car2go.html',
    "<div class=\"car2go\">\n" +
    "  <nav-Bar></nav-Bar>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <time-Input-Form></time-Input-Form>\n" +
    "\n" +
    "      <div class=\"highlight\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"checkbox\">\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.car2go.airport\">\n" +
    "                <span tariff-popover=\"views/popovers/car2go/airport.html\">\n" +
    "                  Flughafenpauschale\n" +
    "                </span>\n" +
    "                <br/>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <price-Box></price-Box>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/car2goblack.html',
    "<div class=\"car2goblack\">\n" +
    "  <nav-Bar></nav-Bar>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <time-Input-Form></time-Input-Form>\n" +
    "\n" +
    "      <div class=\"highlight\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"checkbox\">\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.car2goblack.airport\">\n" +
    "                <span tariff-popover=\"views/popovers/car2goblack/airport.html\">\n" +
    "                  Flughafenpauschale\n" +
    "                </span>\n" +
    "                <br/>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <price-Box></price-Box>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/drivenow.html',
    "<div class=\"drivenow\">\n" +
    "  <nav-Bar></nav-Bar>\n" +
    "  <div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <time-Input-Form></time-Input-Form>\n" +
    "      <div class=\"highlight\">\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          Fahrzeugklasse:\n" +
    "          <form>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.drivenow.tariff\"\n" +
    "                   value=\"mini\"\n" +
    "                   id=\"carClassMini\">\n" +
    "            <span tariff-popover=\"views/popovers/drivenow/carClassMini.html\">\n" +
    "              Mini\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.drivenow.tariff\"\n" +
    "                   value=\"bmw\"\n" +
    "                   id=\"carClassBMW\">\n" +
    "            <span tariff-popover=\"views/popovers/drivenow/carClassBMW.html\">\n" +
    "              BMW\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.drivenow.tariff\"\n" +
    "                   value=\"minicabriosummer\"\n" +
    "                   id=\"carClassMiniCabrioSummer\">\n" +
    "            <span tariff-popover=\"views/popovers/drivenow/carClassMiniCabrioSummer.html\">\n" +
    "              Mini Cabrio Sommer\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.drivenow.tariff\"\n" +
    "                   value=\"minicabriowinter\"\n" +
    "                   id=\"carClassMiniCabrioWinter\">\n" +
    "            <span tariff-popover=\"views/popovers/drivenow/carClassMiniCabrioWinter.html\">\n" +
    "              Mini Cabrio Winter\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          Flughäfen:\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"checkbox\">\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.berlintegel\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/airport.berlintegel.html\">\n" +
    "                  Flughafen Berlin-Tegel\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.berlinschoenefeld\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/airport.berlinschoenefeld.html\">\n" +
    "                  Flughafen Berlin-Schönefeld\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.hamburg\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/airport.hamburg.html\">\n" +
    "                  Flughafen Hamburg\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.muenchen\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/airport.muenchen.html\">\n" +
    "                  Flughafen München\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.cologne\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/airport.cologne.html\">\n" +
    "                  Flughafen Köln\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.duesseldorf\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/airport.duesseldorf.html\">\n" +
    "                  Flughafen Düsseldorf\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.wien\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/airport.wien.html\">\n" +
    "                  Flughafen Wien\n" +
    "                </span>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          Sonderziele:\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"checkbox\">\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.drivecitytocity.duesseldorfcologne\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/drivecitytocity.duesseldorfcologne.html\">\n" +
    "                  Fahrt von Düsseldorf nach Köln\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.drivecitytocity.cologneduesseldorf\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/drivecitytocity.cologneduesseldorf.html\">\n" +
    "                  Fahrt von Köln nach Düsseldorf\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.drivecitytocity.hildengerresheim\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/drivecitytocity.hildengerresheim.html\">\n" +
    "                  Fahrt von Hilden / Gerresheim\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.drivecitytocity.neubibergbavariafilmstadt\">\n" +
    "                <span tariff-popover=\"views/popovers/drivenow/drivecitytocity.neubibergbavariafilmstadt.html\">\n" +
    "                  Fahrt von Neubiberg / Bavaria Filmstadt\n" +
    "                </span>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <price-Box></price-Box>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n"
  );


  $templateCache.put('views/flinkster.html',
    "<div class=\"flinkster\">\n" +
    "  <nav-Bar></nav-Bar>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <time-Input-Form></time-Input-Form>\n" +
    "\n" +
    "      <div class=\"highlight\">\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          Tarif:\n" +
    "          <form>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.tariff\"\n" +
    "                   value=\"bundesweit\"\n" +
    "                   id=\"tariffbundesweit\">\n" +
    "            <span tariff-popover=\"views/popovers/flinkster/tariffbundesweit.html\">\n" +
    "              Bundesweit\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.tariff\"\n" +
    "                   value=\"lokal\"\n" +
    "                   id=\"tarifflokal\">\n" +
    "            <span tariff-popover=\"views/popovers/flinkster/tarifflokal.html\">\n" +
    "              Lokal\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          Fahrzeugklasse:\n" +
    "          <form>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"sonder\"\n" +
    "                   id=\"ratesonder\">\n" +
    "            <span tariff-popover=\"views/popovers/flinkster/carClassSonder.html\">\n" +
    "              Sonder\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"mini\"\n" +
    "                   id=\"ratemini\">\n" +
    "            <span tariff-popover=\"views/popovers/flinkster/carClassMini.html\">\n" +
    "              Mini\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"klein\"\n" +
    "                   id=\"rateklein\">\n" +
    "            <span tariff-popover=\"views/popovers/flinkster/carClassKlein.html\">\n" +
    "              Klein\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"kompakt\"\n" +
    "                   id=\"ratekompakt\">\n" +
    "            <span tariff-popover=\"views/popovers/flinkster/carClassKompakt.html\">\n" +
    "              Kompakt\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"mittel\"\n" +
    "                   id=\"ratemittel\">\n" +
    "            <span tariff-popover=\"views/popovers/flinkster/carClassMittel.html\">\n" +
    "              Mittel\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"transporter\"\n" +
    "                   id=\"ratetransporter\">\n" +
    "            <span tariff-popover=\"views/popovers/flinkster/carClassTransporter.html\">\n" +
    "              Transporter\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"input-group\" ng-if=\"isAirport()\">\n" +
    "            <div class=\"checkbox\">\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.flinkster.airport\">\n" +
    "                <span tariff-popover=\"views/popovers/flinkster/airport.html\">\n" +
    "                  Flughafenpauschale\n" +
    "                </span>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <price-Box></price-Box>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('views/greenwheels.html',
    "<div class=\"greenwheels\">\n" +
    "  <nav-Bar></nav-Bar>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <time-Input-Form></time-Input-Form>\n" +
    "\n" +
    "      <div class=\"highlight\">\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          Tarif:\n" +
    "          <form>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.greenwheels.tariff\"\n" +
    "                   value=\"standard\"\n" +
    "                   id=\"tariffstandard\">\n" +
    "            <span tariff-popover=\"views/popovers/greenwheels/tariffstandard.html\">\n" +
    "              Standard\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.greenwheels.tariff\"\n" +
    "                   value=\"joker\"\n" +
    "                   id=\"tariffjoker\">\n" +
    "            <span tariff-popover=\"views/popovers/greenwheels/tariffjoker.html\">\n" +
    "              Joker\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          Fahrzeugklasse:\n" +
    "          <form>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.greenwheels.carClass\"\n" +
    "                   value=\"compact\"\n" +
    "                   id=\"ratecompact\">\n" +
    "            <span tariff-popover=\"views/popovers/greenwheels/carClassCompact.html\">\n" +
    "                Compact\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.greenwheels.carClass\"\n" +
    "                   value=\"van\"\n" +
    "                   id=\"ratevan\">\n" +
    "            <span tariff-popover=\"views/popovers/greenwheels/carClassVan.html\">\n" +
    "                Van / Lieferwagen\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <price-Box></price-Box>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/navbar.html',
    "<div class=\"header\">\n" +
    "  <ul class=\"nav nav-pills pull-right\">\n" +
    "    <li\n" +
    "      ng-class=\"{ active:isActive('/{{tab.url}}') }\"\n" +
    "      ng-repeat=\"tab in tabs\">\n" +
    "      <a class=\"{{tab.url}}\" ng-href=\"#{{tab.url}}\" id=\"{{tab.url}}\">{{tab\n" +
    "        .name}}</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <h3 class=\"text-muted\">c2gyo</h3>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('views/popovers/car2go/airport.html',
    "<div>4,90€ für alle Fahrten von und zum Flughafen</div>\n"
  );


  $templateCache.put('views/popovers/car2goblack/airport.html',
    "<div>4,90€ für alle Fahrten von und zum Flughafen</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/airport.berlinschoenefeld.html',
    "<div>for each start/end of booking</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/airport.berlintegel.html',
    "<div>for each start/end of booking</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/airport.cologne.html',
    "<div>for each start/end of booking</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/airport.duesseldorf.html',
    "<div>for each start/end of booking</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/airport.hamburg.html',
    "<div>for each start/end of booking</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/airport.muenchen.html',
    "<div>for each start/end of booking</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/airport.wien.html',
    "<div>for each start/end of booking</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/carClassBMW.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>BWM i3</li>\n" +
    "    <li>BMW X1</li>\n" +
    "    <li>BMW 2er Active Tourer</li>\n" +
    "    <li>BMW 2er Cabrio</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/carClassMini.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>Mini</li>\n" +
    "    <li>Mini Clubman</li>\n" +
    "    <li>Mini Countryman</li>\n" +
    "    <li>BMW 1er</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/carClassMiniCabrioSummer.html',
    "<div>Mini Cabrio, Sommer 01.04. - 31.10.</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/carClassMiniCabrioWinter.html',
    "<div>Mini Cabrio, Winter 01.11. - 31.03.</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/drivecitytocity.cologneduesseldorf.html',
    "<div>end booking in the other city</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/drivecitytocity.duesseldorfcologne.html',
    "<div>end booking in the other city</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/drivecitytocity.hildengerresheim.html',
    "<div>plus intercity fee from Cologne</div>\n"
  );


  $templateCache.put('views/popovers/drivenow/drivecitytocity.neubibergbavariafilmstadt.html',
    "<div>end booking in satellite</div>\n"
  );


  $templateCache.put('views/popovers/flinkster/airport.html',
    "<div>Anmietungen an Flughäfen +25% auf den Zeitpreis sind nur zum Tagespreis der bundesweiten Flinkster Preisliste möglich. Der Lokaltarif findet keine Anwendung. Die Betankung erfolgt auf eigene Rechnung ohne Verbrauchspauschale.</div>\n"
  );


  $templateCache.put('views/popovers/flinkster/carClassKlein.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>VW Polo</li>\n" +
    "    <li>Citroen DS3</li>\n" +
    "    <li>Opel Corsa</li>\n" +
    "    <li>Ford Fiesta</li>\n" +
    "    <li>MINI E</li>\n" +
    "    <li>Peugeot iOn</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/flinkster/carClassKompakt.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>Opel Astra</li>\n" +
    "    <li>VW Golf</li>\n" +
    "    <li>Seat Leon</li>\n" +
    "    <li>VW Caddy</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/flinkster/carClassMini.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>Smart</li>\n" +
    "    <li>Fiat Panda</li>\n" +
    "    <li>e-Smart</li>\n" +
    "    <li>Citroen C1</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/flinkster/carClassMittel.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>Ford Mondeo</li>\n" +
    "    <li>VW Passat</li>\n" +
    "    <li>C-Klasse</li>\n" +
    "    <li>Toyota Prius Plug-In PHV</li>\n" +
    "    <li>Opel Ampera</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/flinkster/carClassSonder.html',
    "<div>Fahrzeuge mit Vollbranding:\n" +
    "  <ul>\n" +
    "    <li>Citroen DS3</li>\n" +
    "    <li>Fiat 500</li>\n" +
    "    <li>Mercedes C-Klasse</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/flinkster/carClassTransporter.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>Ford Transit</li>\n" +
    "    <li>MB Sprinter</li>\n" +
    "    <li>Opel Movano</li>\n" +
    "    <li>VW T5</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/flinkster/tariffbundesweit.html',
    "<div>Keine Monatliche Grundgebühr</div>\n"
  );


  $templateCache.put('views/popovers/flinkster/tarifflokal.html',
    "<div>10€ Monatliche Grundgebühr</div>\n"
  );


  $templateCache.put('views/popovers/greenwheels/carClassCompact.html',
    "<div>VW Up</div>\n"
  );


  $templateCache.put('views/popovers/greenwheels/carClassVan.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>VW Golf Variant</li>\n" +
    "    <li>VW Caddy</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/greenwheels/tariffjoker.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>10€ Grundgebühr pro Monat</li>\n" +
    "    <li>60 gratis Kilometer</li>\n" +
    "    <li>30 € für 24 Stunden Buchungen in der Fahrzeugklasse Compact (anstatt 39.76€)</li>\n" +
    "    <li>40 € für 24 Stunden Buchungen in der Fahrzeugklasse Van (anstatt 71.76€)</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/greenwheels/tariffstandard.html',
    "<div>Keine Monatliche Grundgebühr</div>\n"
  );


  $templateCache.put('views/popovers/stadtmobil/carClassRateA.html',
    "<div>Toyota Aygo</div>\n"
  );


  $templateCache.put('views/popovers/stadtmobil/carClassRateB.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>Opel Agila</li>\n" +
    "    <li>Opel Corsa</li>\n" +
    "    <li>Renault Zoe</li>\n" +
    "    <li>Toyota Yaris Hybrid</li>\n" +
    "    <li>Fiat 500 Cabrio</li>\n" +
    "    <li>Opel Adam</li>\n" +
    "    <li>Renault Wind</li>\n" +
    "    <li>Opel Combo Kastenwagen</li>\n" +
    "    <li>Renault Kangoo Kastenwagen</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/stadtmobil/carClassRateC.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>Opel Astra Kombi</li>\n" +
    "    <li>Ford Tourneo Hochdachkombi</li>\n" +
    "    <li>Mini One</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/stadtmobil/carClassRateD.html',
    "<div>\n" +
    "  <ul>\n" +
    "    <li>BMW 116d</li>\n" +
    "    <li>Mazda MX5 Cabrio</li>\n" +
    "    <li>Ford Custom Kleinbus</li>\n" +
    "    <li>Opel Vivaro Kleinbus</li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('views/popovers/stadtmobil/carClassRateF.html',
    "<div>Ford Transit Transporter</div>\n"
  );


  $templateCache.put('views/popovers/stadtmobil/tariffbasic.html',
    "<div>4€ pro Person, 4€ pro weiterer Person, ohne Kaution</div>\n"
  );


  $templateCache.put('views/popovers/stadtmobil/tariffbusiness.html',
    "<div>29€ pro Haushalt, 550€ Kaution</div>\n"
  );


  $templateCache.put('views/popovers/stadtmobil/tariffclassic.html',
    "<div>11€ pro Person, 15€ pro Haushalt, ohne Kaution. 7,50€ pro Person, 11€ pro Haushalt, 550€ Kaution.</div>\n"
  );


  $templateCache.put('views/popovers/stadtmobil/tariffstudi.html',
    "<div>5€ pro Person, 200€ Kaution. Tarif entspricht Classic Tarif</div>\n"
  );


  $templateCache.put('views/priceBox.html',
    "<div class=\"highlight\">\n" +
    "    <h1 id=\"price\">{{ price() | currency }}</h1>\n" +
    "    <h2 id=\"priceDistance\">{{ getFeeDistance() | currency }}</h2> Km Preis<br>\n" +
    "    <h2 id=\"priceTime\">{{ getFeeTime() | currency }}</h2> Zeit Preis<br>\n" +
    "    <h2 id=\"pricePerKm\">{{ pricePerKm() | currency }}</h2> pro Km<br>\n" +
    "\n" +
    "    <billed-box></billed-box>\n" +
    "</div>\n"
  );


  $templateCache.put('views/stadtmobil.html',
    "<div class=\"stadtmobil\">\n" +
    "  <nav-Bar></nav-Bar>\n" +
    "  <div class=\"row\">\n" +
    "\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <time-Input-Form></time-Input-Form>\n" +
    "    <div class=\"highlight\">\n" +
    "\n" +
    "      <div class=\"form-group\">\n" +
    "        Tarif:\n" +
    "        <form>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.tariff\"\n" +
    "                 value=\"classic\"\n" +
    "                 id=\"tariffclassic\">\n" +
    "          <span tariff-popover=\"views/popovers/stadtmobil/tariffclassic.html\">\n" +
    "            Classic\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.tariff\"\n" +
    "                 value=\"basic\"\n" +
    "                 id=\"tariffbasic\">\n" +
    "          <span tariff-popover=\"views/popovers/stadtmobil/tariffbasic.html\">\n" +
    "            Basic\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.tariff\"\n" +
    "                 value=\"studi\"\n" +
    "                 id=\"tariffstudi\">\n" +
    "          <span tariff-popover=\"views/popovers/stadtmobil/tariffstudi.html\">\n" +
    "            Studi\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.tariff\"\n" +
    "                 value=\"business\"\n" +
    "                 id=\"tariffbusiness\">\n" +
    "          <span tariff-popover=\"views/popovers/stadtmobil/tariffbusiness.html\">\n" +
    "            Business\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group\">\n" +
    "        Fahrzeugklasse:\n" +
    "        <form>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.carClass\"\n" +
    "                 value=\"A\"\n" +
    "                 id=\"rateA\">\n" +
    "          <span tariff-popover=\"views/popovers/stadtmobil/carClassRateA.html\">\n" +
    "            A Kleinstwagen\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.carClass\"\n" +
    "                 value=\"B\"\n" +
    "                 id=\"rateB\">\n" +
    "          <span tariff-popover=\"views/popovers/stadtmobil/carClassRateB.html\">\n" +
    "            B Kleinwagen\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.carClass\"\n" +
    "                 value=\"C\"\n" +
    "                 id=\"rateC\">\n" +
    "          <span tariff-popover=\"views/popovers/stadtmobil/carClassRateC.html\">\n" +
    "            C Kombi/Fun\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.carClass\"\n" +
    "                 value=\"D\"\n" +
    "                 id=\"rateD\">\n" +
    "          <span tariff-popover=\"views/popovers/stadtmobil/carClassRateD.html\">\n" +
    "            D Komfort/Kleinbus\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.carClass\"\n" +
    "                 value=\"F\"\n" +
    "                 id=\"rateF\">\n" +
    "          <span tariff-popover=\"views/popovers/stadtmobil/carClassRateF.html\">\n" +
    "            F Transporter\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <price-Box></price-Box>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('views/timeinputform.html',
    "<div class=\"highlight\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{ active:isSet('simple') }\">\n" +
    "    <a href ng-click=\"setTab('simple')\">Simple</a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{ active:isSet('exact') }\">\n" +
    "      <a href ng-click=\"setTab('exact')\">Exact</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <div ng-if=\"isSet('simple')\">\n" +
    "    <h4>Zeit</h4>\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('minutes')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Minuten\" ng-model=\"rental.timeMinutes\">\n" +
    "        <span class=\"input-group-addon\">Minuten</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('hours')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Stunden\" ng-model=\"rental.timeHours\">\n" +
    "        <span class=\"input-group-addon\">Stunden</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('days')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Tage\" ng-model=\"rental.timeDays\">\n" +
    "        <span class=\"input-group-addon\">Tage</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('weeks')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Wochen\" ng-model=\"rental.timeWeeks\">\n" +
    "        <span class=\"input-group-addon\">Wochen</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"isSet('exact')\">\n" +
    "    <h4>Startdatum</h4>\n" +
    "    <div class=\"dropdown\">\n" +
    "      <a class=\"dropdown-toggle\" id=\"dropdown2\" role=\"button\" data-toggle=\"dropdown\" data-target=\"\" href=\"\">\n" +
    "        <div class=\"input-group\"><input type=\"text\" class=\"form-control\" data-ng-model=\"rental.startDate\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "        <datetimepicker data-ng-model=\"rental.startDate\" data-datetimepicker-config=\"{ dropdownSelector: '#dropdown2', minView: 'hour' }\"/>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <h4>Enddatum</h4>\n" +
    "    <div class=\"dropdown\">\n" +
    "      <a class=\"dropdown-toggle\" id=\"dropdown3\" role=\"button\" data-toggle=\"dropdown\" data-target=\"\" href=\"\">\n" +
    "        <div class=\"input-group\"><input type=\"text\" class=\"form-control\" data-ng-model=\"rental.endDate\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "        <datetimepicker data-ng-model=\"rental.endDate\" data-datetimepicker-config=\"{ dropdownSelector: '#dropdown3', minView: 'hour' }\"/>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-group\" ng-if=\"isResolution('minutesStanding')\">\n" +
    "    <h5 ng-if=\"isSet('exact')\">Zeit stehend</h5>\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"number\" class=\"form-control\" placeholder=\"Minuten stehend\" ng-model=\"rental.timeStanding\">\n" +
    "      <span class=\"input-group-addon\">Minuten (Stehend)</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <h4>Strecke</h4>\n" +
    "  <div class=\"form-group\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"number\" class=\"form-control\" placeholder=\"Strecke\" ng-model=\"rental.distance\">\n" +
    "      <span class=\"input-group-addon\">Km</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );
}]);