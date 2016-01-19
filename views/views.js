angular.module("c2gyoApp").run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('views/billedBox.html',
    "<h2>{{\"billedTime\" | translate }}</h2>\n" +
    "<div ng-show=\"{{isResolution('minutes')}}\">\n" +
    "  {{ getMinutesBilled( timeMinutes ) }} {{\"minute\" | translate }}\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('hours')}}\">\n" +
    "  {{ getHoursBilled( timeMinutes ) }} {{\"hour\" | translate }}\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('days')}}\">\n" +
    "  {{ getDaysBilled( timeMinutes ) }} {{\"day\" | translate }}\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('weeks')}}\">\n" +
    "  {{ getWeeksBilled( timeMinutes ) }} {{\"week\" | translate }}\n" +
    "</div>\n" +
    "\n" +
    "<h2>{{\"trueTime\" | translate }}</h2>\n" +
    "<div ng-show=\"{{isResolution('minutes')}}\">\n" +
    "  {{ getMinutes( timeMinutes ) }} {{\"minute\" | translate }}\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('hours')}}\">\n" +
    "  {{ getHours( timeMinutes ) }} {{\"hour\" | translate }}\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('days')}}\">\n" +
    "  {{ getDays( timeMinutes ) }} {{\"day\" | translate }}\n" +
    "</div>\n" +
    "<div ng-show=\"{{isResolution('weeks')}}\">\n" +
    "  {{ getWeeks( timeMinutes ) }} {{\"week\" | translate }}\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n"
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
    "                <span tariff-popover=\"popover.car2go.airport\">\n" +
    "                  {{\"airportFee\" | translate }}\n" +
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
    "                <span tariff-popover=\"popover.car2goblack.airport\">\n" +
    "                  {{\"airportFee\" | translate }}\n" +
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
    "          {{\"carClass\" | translate }}:\n" +
    "          <form>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.drivenow.tariff\"\n" +
    "                   value=\"mini\"\n" +
    "                   id=\"carClass.Mini\">\n" +
    "            <span tariff-popover=\"popover.drivenow.carClass.Mini\">\n" +
    "              Mini\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.drivenow.tariff\"\n" +
    "                   value=\"bmw\"\n" +
    "                   id=\"carClass.BMW\">\n" +
    "            <span tariff-popover=\"popover.drivenow.carClass.BMW\">\n" +
    "              BMW\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.drivenow.tariff\"\n" +
    "                   value=\"minicabriosummer\"\n" +
    "                   id=\"carClass.MiniCabrioSummer\">\n" +
    "            <span tariff-popover=\"popover.drivenow.carClass.MiniCabrioSummer\">\n" +
    "              Mini Cabrio Sommer\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.drivenow.tariff\"\n" +
    "                   value=\"minicabriowinter\"\n" +
    "                   id=\"carClass.MiniCabrioWinter\">\n" +
    "            <span tariff-popover=\"popover.drivenow.carClass.MiniCabrioWinter\">\n" +
    "              Mini Cabrio Winter\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          {{\"airports\" | translate }}:\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"checkbox\">\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.berlintegel\">\n" +
    "                <span tariff-popover=\"popover.drivenow.airport.berlintegel\">\n" +
    "                  {{\"rental.drivenow.airport.berlintegel\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.berlinschoenefeld\">\n" +
    "                <span tariff-popover=\"popover.drivenow.airport.berlinschoenefeld\">\n" +
    "                  {{\"rental.drivenow.airport.berlinschoenefeld\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.hamburg\">\n" +
    "                <span tariff-popover=\"popover.drivenow.airport.hamburg\">\n" +
    "                  {{\"rental.drivenow.airport.hamburg\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.munich\">\n" +
    "                <span tariff-popover=\"popover.drivenow.airport.munich\">\n" +
    "                  {{\"rental.drivenow.airport.munich\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.cologne\">\n" +
    "                <span tariff-popover=\"popover.drivenow.airport.cologne\">\n" +
    "                  {{\"rental.drivenow.airport.cologne\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.duesseldorf\">\n" +
    "                <span tariff-popover=\"popover.drivenow.airport.duesseldorf\">\n" +
    "                  {{\"rental.drivenow.airport.duesseldorf\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.airport.wien\">\n" +
    "                <span tariff-popover=\"popover.drivenow.airport.wien\">\n" +
    "                  {{\"rental.drivenow.airport.wien\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          {{\"specialDestinations\" | translate }}:\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"checkbox\">\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.drivecitytocity.duesseldorfcologne\">\n" +
    "                <span tariff-popover=\"popover.drivenow.drivecitytocity.duesseldorfcologne\">\n" +
    "                  {{\"rental.drivenow.drivecitytocity.duesseldorfcologne\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.drivecitytocity.cologneduesseldorf\">\n" +
    "                <span tariff-popover=\"popover.drivenow.drivecitytocity.cologneduesseldorf\">\n" +
    "                  {{\"rental.drivenow.drivecitytocity.cologneduesseldorf\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.drivecitytocity.hildengerresheim\">\n" +
    "                <span tariff-popover=\"popover.drivenow.drivecitytocity.hildengerresheim\">\n" +
    "                  {{\"rental.drivenow.drivecitytocity.hildengerresheim\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.drivenow.drivecitytocity.neubibergbavariafilmstadt\">\n" +
    "                <span tariff-popover=\"popover.drivenow.drivecitytocity.neubibergbavariafilmstadt\">\n" +
    "                  {{\"rental.drivenow.drivecitytocity.neubibergbavariafilmstadt\" | translate }}\n" +
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
    "          {{\"tariff\" | translate }}:\n" +
    "          <form>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.tariff\"\n" +
    "                   value=\"bundesweit\"\n" +
    "                   id=\"tariffbundesweit\">\n" +
    "            <span tariff-popover=\"popover.flinkster.tariff.bundesweit\">\n" +
    "              Bundesweit\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.tariff\"\n" +
    "                   value=\"lokal\"\n" +
    "                   id=\"tarifflokal\">\n" +
    "            <span tariff-popover=\"popover.flinkster.tariff.lokal\">\n" +
    "              Lokal\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          {{\"carClass\" | translate }}:\n" +
    "          <form>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"sonder\"\n" +
    "                   id=\"ratesonder\">\n" +
    "            <span tariff-popover=\"popover.flinkster.carClass.Sonder\">\n" +
    "              Sonder\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"mini\"\n" +
    "                   id=\"ratemini\">\n" +
    "            <span tariff-popover=\"popover.flinkster.carClass.Mini\">\n" +
    "              Mini\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"klein\"\n" +
    "                   id=\"rateklein\">\n" +
    "            <span tariff-popover=\"popover.flinkster.carClass.Klein\">\n" +
    "              Klein\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"kompakt\"\n" +
    "                   id=\"ratekompakt\">\n" +
    "            <span tariff-popover=\"popover.flinkster.carClass.Kompakt\">\n" +
    "              Kompakt\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"mittel\"\n" +
    "                   id=\"ratemittel\">\n" +
    "            <span tariff-popover=\"popover.flinkster.carClass.Mittel\">\n" +
    "              Mittel\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.flinkster.carClass\"\n" +
    "                   value=\"transporter\"\n" +
    "                   id=\"ratetransporter\">\n" +
    "            <span tariff-popover=\"popover.flinkster.carClass.Transporter\">\n" +
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
    "                <span tariff-popover=\"popover.flinkster.airport\">\n" +
    "                  {{\"airportFee\" | translate }}\n" +
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
    "          {{\"tariff\" | translate }}:\n" +
    "          <form>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.greenwheels.tariff\"\n" +
    "                   value=\"standard\"\n" +
    "                   id=\"tariffstandard\">\n" +
    "            <span tariff-popover=\"popover.greenwheels.tariff.standard\">\n" +
    "              Standard\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.greenwheels.tariff\"\n" +
    "                   value=\"joker\"\n" +
    "                   id=\"tariffjoker\">\n" +
    "            <span tariff-popover=\"popover.greenwheels.tariff.joker\">\n" +
    "              Joker\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          {{\"carClass\" | translate }}:\n" +
    "          <form>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.greenwheels.carClass\"\n" +
    "                   value=\"compact\"\n" +
    "                   id=\"ratecompact\">\n" +
    "            <span tariff-popover=\"popover.greenwheels.carClass.Compact\">\n" +
    "                Compact\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rental.greenwheels.carClass\"\n" +
    "                   value=\"van\"\n" +
    "                   id=\"ratevan\">\n" +
    "            <span tariff-popover=\"popover.greenwheels.carClass.Van\">\n" +
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
    "    <!--\n" +
    "    <li\n" +
    "      ng-class=\"{ active:isActive('/{{tab.url}}') }\"\n" +
    "      ng-repeat=\"tab in tabs\">\n" +
    "      <a class=\"{{tab.url}}\" ng-href=\"#{{tab.url}}\" id=\"{{tab.url}}\">{{tab\n" +
    "        .name}}</a>\n" +
    "    </li>\n" +
    "    -->\n" +
    "    <li>\n" +
    "      <div class=\"btn-group\" uib-dropdown is-open=\"status2.isopen\">\n" +
    "        <button\n" +
    "          id=\"nav-button\"\n" +
    "          type=\"button\"\n" +
    "          class=\"btn btn-default nav-button\"\n" +
    "          uib-dropdown-toggle\n" +
    "          ng-disabled=\"disabled\">\n" +
    "          {{ active() }}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"uib-dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\" >\n" +
    "          <li role=\"menuitem\" ng-class=\"{ active:isActive('/{{tab.url}}') }\" ng-repeat=\"tab in tabs\">\n" +
    "            <a ng-href=\"#{{tab.url}}\" id=\"{{tab.url}}\">{{tab.name}}</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "\n" +
    "    <li>\n" +
    "      <div class=\"btn-group\" uib-dropdown is-open=\"status.isopen\" ng-controller=\"LangCtrl\">\n" +
    "        <button\n" +
    "          id=\"single-button\"\n" +
    "          type=\"button\"\n" +
    "          class=\"btn btn-default\"\n" +
    "          uib-dropdown-toggle\n" +
    "          ng-disabled=\"disabled\">\n" +
    "          {{ \"languageButton\" | translate }}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"uib-dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\" >\n" +
    "          <li role=\"menuituem\"><a href=\"\" ng-click=\"changeLang('en_US')\">English</a></li>\n" +
    "          <li role=\"menuituem\"><a href=\"\" ng-click=\"changeLang('de_DE')\">Deutsch</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <h3 class=\"text-muted\">c2gyo</h3>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n"
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


  $templateCache.put('views/popovers/drivenow/airport.munich.html',
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


  $templateCache.put('views/priceBox.html',
    "<div class=\"highlight\">\n" +
    "    <h1 id=\"price\">{{ price() | currency }}</h1>\n" +
    "    <h2 id=\"priceDistance\">{{ getFeeDistance() | currency }}</h2> {{\"kmPrice\" | translate }}<br>\n" +
    "    <h2 id=\"priceTime\">{{ getFeeTime() | currency }}</h2> {{\"timePrice\" | translate }}<br>\n" +
    "    <h2 id=\"pricePerKm\">{{ pricePerKm() | currency }}</h2> {{\"byKm\" | translate }}<br>\n" +
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
    "          <span tariff-popover=\"popover.stadtmobil.tariff.classic\">\n" +
    "            Classic\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.tariff\"\n" +
    "                 value=\"basic\"\n" +
    "                 id=\"tariffbasic\">\n" +
    "          <span tariff-popover=\"popover.stadtmobil.tariff.basic\">\n" +
    "            Basic\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.tariff\"\n" +
    "                 value=\"studi\"\n" +
    "                 id=\"tariffstudi\">\n" +
    "          <span tariff-popover=\"popover.stadtmobil.tariff.studi\">\n" +
    "            Studi\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.tariff\"\n" +
    "                 value=\"business\"\n" +
    "                 id=\"tariffbusiness\">\n" +
    "          <span tariff-popover=\"popover.stadtmobil.tariff.business\">\n" +
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
    "          <span tariff-popover=\"popover.stadtmobil.carClass.RateA\">\n" +
    "            A Kleinstwagen\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.carClass\"\n" +
    "                 value=\"B\"\n" +
    "                 id=\"rateB\">\n" +
    "          <span tariff-popover=\"popover.stadtmobil.carClass.RateB\">\n" +
    "            B Kleinwagen\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.carClass\"\n" +
    "                 value=\"C\"\n" +
    "                 id=\"rateC\">\n" +
    "          <span tariff-popover=\"popover.stadtmobil.carClass.RateC\">\n" +
    "            C Kombi/Fun\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.carClass\"\n" +
    "                 value=\"D\"\n" +
    "                 id=\"rateD\">\n" +
    "          <span tariff-popover=\"popover.stadtmobil.carClass.RateD\">\n" +
    "            D Komfort/Kleinbus\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rental.stadtmobil.carClass\"\n" +
    "                 value=\"F\"\n" +
    "                 id=\"rateF\">\n" +
    "          <span tariff-popover=\"popover.stadtmobil.carClass.RateF\">\n" +
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
    "    <li ng-class=\"{ active:isSet('tabSimple') }\">\n" +
    "    <a href ng-click=\"setTab('tabSimple')\">{{\"simple\" | translate }}</a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{ active:isSet('tabExact') }\">\n" +
    "      <a href ng-click=\"setTab('tabExact')\">{{\"exact\" | translate }}</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <div ng-if=\"isSet('tabSimple')\">\n" +
    "    <h4 translate=\"time\"></h4>\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('minutes')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Minuten\" ng-model=\"rental.timeMinutes\">\n" +
    "        <span class=\"input-group-addon\">{{\"minute\" | translate }}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('hours')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Stunden\" ng-model=\"rental.timeHours\">\n" +
    "        <span class=\"input-group-addon\">{{\"hour\" | translate }}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('days')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Tage\" ng-model=\"rental.timeDays\">\n" +
    "        <span class=\"input-group-addon\">{{\"day\" | translate }}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('weeks')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Wochen\" ng-model=\"rental.timeWeeks\">\n" +
    "        <span class=\"input-group-addon\">{{\"week\" | translate }}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"isSet('tabExact')\">\n" +
    "    <h4>{{\"startDate\" | translate }}</h4>\n" +
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
    "    <h4>{{\"endDate\" | translate }}</h4>\n" +
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
    "    <h5 ng-if=\"isSet('tabExact')\">{{\"timeStanding\" | translate }}</h5>\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"number\" class=\"form-control\" placeholder=\"Minuten stehend\" ng-model=\"rental.timeStanding\">\n" +
    "      <span class=\"input-group-addon\">{{\"minuteStanding\" | translate }}</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <h4>{{\"distance\" | translate }}</h4>\n" +
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