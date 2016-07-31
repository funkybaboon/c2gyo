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


  $templateCache.put('views/bookndrive.html',
    "<div class=\"bookndrive\">\n" +
    "  <nav-Bar></nav-Bar>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <time-Input-Form></time-Input-Form>\n" +
    "\n" +
    "      <div class=\"highlight\">\n" +
    "\n" +
    "        <tarif-form\n" +
    "          listofoptions=\"tariffs\"\n" +
    "          vendor=\"bookndrive\">\n" +
    "        </tarif-form>\n" +
    "\n" +
    "        <car-class-form\n" +
    "          listofoptions=\"carclasses\"\n" +
    "          vendor=\"bookndrive\">\n" +
    "        </car-class-form>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <price-Box></price-Box>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/car2go.html',
    "<div class=\"car2go\">\n" +
    "  <nav-Bar></nav-Bar>\n" +
    "  <div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <time-Input-Form></time-Input-Form>\n" +
    "      <div class=\"highlight\">\n" +
    "\n" +
    "        <car-class-form\n" +
    "                listofoptions=\"carclasses\"\n" +
    "                vendor=\"car2go\">\n" +
    "        </car-class-form>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          {{\"airports\" | translate }}:\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"checkbox\">\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.car2go.airport.berlin\">\n" +
    "                <span tariff-popover=\"popover.car2go.airport.berlin\">\n" +
    "                  {{\"rental.car2go.airport.berlin\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.car2go.airport.hamburg\">\n" +
    "                <span tariff-popover=\"popover.car2go.airport.hamburg\">\n" +
    "                  {{\"rental.car2go.airport.hamburg\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.car2go.airport.cologne\">\n" +
    "                <span tariff-popover=\"popover.car2go.airport.cologne\">\n" +
    "                  {{\"rental.car2go.airport.cologne\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.car2go.airport.duesseldorf\">\n" +
    "                <span tariff-popover=\"popover.car2go.airport.duesseldorf\">\n" +
    "                  {{\"rental.car2go.airport.duesseldorf\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.car2go.airport.frankfurt\">\n" +
    "                <span tariff-popover=\"popover.car2go.airport.frankfurt\">\n" +
    "                  {{\"rental.car2go.airport.frankfurt\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.car2go.airport.stuttgart\">\n" +
    "                <span tariff-popover=\"popover.car2go.airport.stuttgart\">\n" +
    "                  {{\"rental.car2go.airport.stuttgart\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "              <br/>\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"\n" +
    "                       ng-model=\"rental.car2go.airport.munich\">\n" +
    "                <span tariff-popover=\"popover.car2go.airport.munich\">\n" +
    "                  {{\"rental.car2go.airport.munich\" | translate }}\n" +
    "                </span>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <price-Box></price-Box>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/carclassform.html',
    "<div class=\"form-group\">\n" +
    "  {{ 'carClass' | translate }}:\n" +
    "  <form>\n" +
    "    <span ng-repeat=\"option in options\">\n" +
    "      <input type=\"radio\"\n" +
    "             ng-model=\"rental.carclass\"\n" +
    "             value=\"{{option.value}}\"\n" +
    "             id=\"{{option.id}}\">\n" +
    "      <span tariff-popover=\"{{option.popover}}\">\n" +
    "        {{option.name}}\n" +
    "      </span>\n" +
    "      <br/>\n" +
    "    </span>\n" +
    "  </form>\n" +
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
    "        <car-class-form\n" +
    "          listofoptions=\"carclasses\"\n" +
    "          vendor=\"drivenow\">\n" +
    "        </car-class-form>\n" +
    "\n" +
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
    "        <tarif-form\n" +
    "          listofoptions=\"tariffs\"\n" +
    "          vendor=\"flinkster\">\n" +
    "        </tarif-form>\n" +
    "\n" +
    "        <car-class-form\n" +
    "          listofoptions=\"carclasses\"\n" +
    "          vendor=\"flinkster\">\n" +
    "        </car-class-form>\n" +
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
    "        <tarif-form\n" +
    "          listofoptions=\"tariffs\"\n" +
    "          vendor=\"greenwheels\">\n" +
    "        </tarif-form>\n" +
    "\n" +
    "        <car-class-form\n" +
    "          listofoptions=\"carclasses\"\n" +
    "          vendor=\"greenwheels\">\n" +
    "        </car-class-form>\n" +
    "\n" +
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
    "        <ul class=\"uib-dropdown-menu\" role=\"menu\"\n" +
    "            aria-labelledby=\"single-button\">\n" +
    "          <li role=\"menuitem\" ng-class=\"{ active:isActive('/{{tab.url}}') }\"\n" +
    "              ng-repeat=\"tab in tabs\">\n" +
    "            <a ng-href=\"#{{tab.url}}\" id=\"{{tab.url}}\">{{tab.name}}</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "\n" +
    "    <li>\n" +
    "      <div class=\"btn-group\" uib-dropdown is-open=\"status.isopen\"\n" +
    "           ng-controller=\"LangCtrl\">\n" +
    "        <button\n" +
    "          id=\"single-button\"\n" +
    "          type=\"button\"\n" +
    "          class=\"btn btn-default\"\n" +
    "          uib-dropdown-toggle\n" +
    "          ng-disabled=\"disabled\">\n" +
    "          {{ \"languageButton\" | translate }}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"uib-dropdown-menu\" role=\"menu\"\n" +
    "            aria-labelledby=\"single-button\">\n" +
    "          <li role=\"menuituem\">\n" +
    "            <a href=\"\"\n" +
    "               ng-click=\"changeLang('en_US')\">\n" +
    "              English\n" +
    "            </a>\n" +
    "          </li>\n" +
    "          <li role=\"menuituem\">\n" +
    "            <a href=\"\"\n" +
    "               ng-click=\"changeLang('de_DE')\">\n" +
    "              Deutsch\n" +
    "            </a>\n" +
    "          </li>\n" +
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
    "    <div class=\"col-md-6\">\n" +
    "      <time-Input-Form></time-Input-Form>\n" +
    "      <div class=\"highlight\">\n" +
    "\n" +
    "        <tarif-form\n" +
    "          listofoptions=\"tariffs\"\n" +
    "          vendor=\"stadtmobil\">\n" +
    "        </tarif-form>\n" +
    "\n" +
    "        <car-class-form\n" +
    "          listofoptions=\"carclasses\"\n" +
    "          vendor=\"stadtmobil\">\n" +
    "        </car-class-form>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <price-Box></price-Box>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/tarifform.html',
    "<div class=\"form-group\">\n" +
    "  {{ 'tariff' | translate }}:\n" +
    "  <form>\n" +
    "    <span ng-repeat=\"option in options\">\n" +
    "      <input type=\"radio\"\n" +
    "             ng-model=\"rental.tariff\"\n" +
    "             value=\"{{option.value}}\"\n" +
    "             id=\"{{option.id}}\">\n" +
    "      <span tariff-popover=\"{{option.popover}}\">\n" +
    "        {{option.name}}\n" +
    "      </span>\n" +
    "      <br/>\n" +
    "    </span>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('views/timeinputform.html',
    "<div class=\"highlight\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{ active:isSet('tabSimple') }\">\n" +
    "      <a href ng-click=\"setTab('tabSimple')\">{{\"simple\" | translate }}</a>\n" +
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
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Minuten\"\n" +
    "               ng-model=\"rental.timeMinutes\">\n" +
    "        <span class=\"input-group-addon\">{{\"minute\" | translate }}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('hours')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Stunden\"\n" +
    "               ng-model=\"rental.timeHours\">\n" +
    "        <span class=\"input-group-addon\">{{\"hour\" | translate }}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('days')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Tage\"\n" +
    "               ng-model=\"rental.timeDays\">\n" +
    "        <span class=\"input-group-addon\">{{\"day\" | translate }}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"isResolution('weeks')\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"number\" class=\"form-control\" placeholder=\"Wochen\"\n" +
    "               ng-model=\"rental.timeWeeks\">\n" +
    "        <span class=\"input-group-addon\">{{\"week\" | translate }}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"isSet('tabExact')\">\n" +
    "    <h4>{{\"startDate\" | translate }}</h4>\n" +
    "    <div class=\"dropdown\">\n" +
    "      <a class=\"dropdown-toggle\" id=\"dropdown2\" role=\"button\"\n" +
    "         data-toggle=\"dropdown\" data-target=\"\" href=\"\">\n" +
    "        <div class=\"input-group\"><input type=\"text\" class=\"form-control\"\n" +
    "                                        data-ng-model=\"rental.startDate\"><span\n" +
    "          class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "        <datetimepicker data-ng-model=\"rental.startDate\"\n" +
    "                        data-datetimepicker-config=\"{ dropdownSelector: '#dropdown2', minView: 'hour' }\"/>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <h4>{{\"endDate\" | translate }}</h4>\n" +
    "    <div class=\"dropdown\">\n" +
    "      <a class=\"dropdown-toggle\" id=\"dropdown3\" role=\"button\"\n" +
    "         data-toggle=\"dropdown\" data-target=\"\" href=\"\">\n" +
    "        <div class=\"input-group\"><input type=\"text\" class=\"form-control\"\n" +
    "                                        data-ng-model=\"rental.endDate\"><span\n" +
    "          class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "        <datetimepicker data-ng-model=\"rental.endDate\"\n" +
    "                        data-datetimepicker-config=\"{ dropdownSelector: '#dropdown3', minView: 'hour' }\"/>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-group\" ng-if=\"isResolution('minutesStanding')\">\n" +
    "    <h5 ng-if=\"isSet('tabExact')\">{{\"timeStanding\" | translate }}</h5>\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"number\" class=\"form-control\" placeholder=\"Minuten stehend\"\n" +
    "             ng-model=\"rental.timeStanding\">\n" +
    "      <span class=\"input-group-addon\">{{\"minuteStanding\" | translate }}</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <h4>{{\"distance\" | translate }}</h4>\n" +
    "  <div class=\"form-group\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"number\" class=\"form-control\" placeholder=\"Strecke\"\n" +
    "             ng-model=\"rental.distance\">\n" +
    "      <span class=\"input-group-addon\">Km</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );
}]);