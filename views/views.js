angular.module("c2gyoApp").run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('views/billedBox.html',
    "<h2>Abgerechnete Zeit</h2>\n" +
    "\n" +
    "<div ng-show=\"{{isResolution('minutes')}}\">{{ getMinutesBilled( timeMinutes ) }} Minuten</div>\n" +
    "<div ng-show=\"{{isResolution('hours')}}\">{{ getHoursBilled( timeMinutes ) }} Stunden</div>\n" +
    "<div ng-show=\"{{isResolution('days')}}\">{{ getDaysBilled( timeMinutes ) }} Tage</div>\n" +
    "<div ng-show=\"{{isResolution('weeks')}}\">{{ getWeeksBilled( timeMinutes ) }} Wochen</div>\n" +
    "\n" +
    "<h2>Wahre Zeit</h2>\n" +
    "\n" +
    "<div ng-show=\"{{isResolution('minutes')}}\">{{ getMinutes( timeMinutes ) }} Minuten</div>\n" +
    "<div ng-show=\"{{isResolution('hours')}}\">{{ getHours( timeMinutes ) }} Stunden</div>\n" +
    "<div ng-show=\"{{isResolution('days')}}\">{{ getDays( timeMinutes ) }} Tage</div>\n" +
    "<div ng-show=\"{{isResolution('weeks')}}\">{{ getWeeks( timeMinutes ) }} Wochen</div>\n"
  );


  $templateCache.put('views/c2g.html',
    "<div class=\"c2g\">\n" +
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
    "                       ng-model=\"rental.airport\">\n" +
    "                <span tariff-popover=\"{{info.airport}}\">\n" +
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


  $templateCache.put('views/c2gb.html',
    "<div class=\"c2gb\">\n" +
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
    "                       ng-model=\"rental.airport\">\n" +
    "                <span tariff-popover=\"{{info.airport}}\">\n" +
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
    "                   ng-model=\"rate.tariff\"\n" +
    "                   value=\"bundesweit\"\n" +
    "                   id=\"tariffbundesweit\">\n" +
    "            <span tariff-popover=\"{{info.tariff.tariffbundesweit}}\">\n" +
    "              Bundesweit\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rate.tariff\"\n" +
    "                   value=\"lokal\"\n" +
    "                   id=\"tarifflokal\">\n" +
    "            <span tariff-popover=\"{{info.tariff.tarifflokal}}\">\n" +
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
    "                   ng-model=\"rate.carClass\"\n" +
    "                   value=\"sonder\"\n" +
    "                   id=\"ratesonder\">\n" +
    "            <span tariff-popover=\"{{info.carClass.sonder}}\">\n" +
    "              Sonder\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rate.carClass\"\n" +
    "                   value=\"mini\"\n" +
    "                   id=\"ratemini\">\n" +
    "            <span tariff-popover=\"{{info.carClass.mini}}\">\n" +
    "              Mini\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rate.carClass\"\n" +
    "                   value=\"klein\"\n" +
    "                   id=\"rateklein\">\n" +
    "            <span tariff-popover=\"{{info.carClass.klein}}\">\n" +
    "              Klein\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rate.carClass\"\n" +
    "                   value=\"kompakt\"\n" +
    "                   id=\"ratekompakt\">\n" +
    "            <span tariff-popover=\"{{info.carClass.kompakt}}\">\n" +
    "              Kompakt\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rate.carClass\"\n" +
    "                   value=\"mittel\"\n" +
    "                   id=\"ratemittel\">\n" +
    "            <span tariff-popover=\"{{info.carClass.mittel}}\">\n" +
    "              Mittel\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "            <input type=\"radio\"\n" +
    "                   ng-model=\"rate.carClass\"\n" +
    "                   value=\"transporter\"\n" +
    "                   id=\"ratetransporter\">\n" +
    "            <span tariff-popover=\"{{info.carClass.transporter}}\">\n" +
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
    "                       ng-model=\"rental.airport\">\n" +
    "                <span tariff-popover=\"{{info.airport}}\">\n" +
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


  $templateCache.put('views/sm.html',
    "<div class=\"sm\">\n" +
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
    "                 ng-model=\"rate.tariff\"\n" +
    "                 value=\"classic\"\n" +
    "                 id=\"tariffclassic\">\n" +
    "          <span tariff-popover=\"{{info.tariff.tariffclassic}}\">\n" +
    "            Classic\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rate.tariff\"\n" +
    "                 value=\"basic\"\n" +
    "                 id=\"tariffbasic\">\n" +
    "          <span tariff-popover=\"{{info.tariff.tariffbasic}}\">\n" +
    "            Basic\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rate.tariff\"\n" +
    "                 value=\"studi\"\n" +
    "                 id=\"tariffstudi\">\n" +
    "          <span tariff-popover=\"{{info.tariff.tariffstudi}}\">\n" +
    "            Studi\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rate.tariff\"\n" +
    "                 value=\"business\"\n" +
    "                 id=\"tariffbusiness\">\n" +
    "          <span tariff-popover=\"{{info.tariff.tariffbusiness}}\">\n" +
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
    "                 ng-model=\"rate.carClass\"\n" +
    "                 value=\"A\"\n" +
    "                 id=\"rateA\">\n" +
    "          <span tariff-popover=\"{{info.carClass.rateA}}\">\n" +
    "            A Kleinstwagen\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rate.carClass\"\n" +
    "                 value=\"B\"\n" +
    "                 id=\"rateB\">\n" +
    "          <span tariff-popover=\"{{info.carClass.rateB}}\">\n" +
    "            B Kleinwagen\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rate.carClass\"\n" +
    "                 value=\"C\"\n" +
    "                 id=\"rateC\">\n" +
    "          <span tariff-popover=\"{{info.carClass.rateC}}\">\n" +
    "            C Kombi/Fun\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rate.carClass\"\n" +
    "                 value=\"D\"\n" +
    "                 id=\"rateD\">\n" +
    "          <span tariff-popover=\"{{info.carClass.rateD}}\">\n" +
    "            D Komfort/Kleinbus\n" +
    "          </span>\n" +
    "          <br/>\n" +
    "          <input type=\"radio\"\n" +
    "                 ng-model=\"rate.carClass\"\n" +
    "                 value=\"F\"\n" +
    "                 id=\"rateF\">\n" +
    "          <span tariff-popover=\"{{info.carClass.rateF}}\">\n" +
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
    "  <button type=\"button\" class=\"btn btn-default\" ng-click=\"clear()\" id=\"clear\">\n" +
    "    Clear\n" +
    "  </button>\n" +
    "\n" +
    "</div>\n"
  );
}]);