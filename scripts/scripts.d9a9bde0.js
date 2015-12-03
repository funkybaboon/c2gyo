"use strict";angular.module("c2gyoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angularMoment","ui.bootstrap","ui.bootstrap.datetimepicker"]).config(["$routeProvider",function(a){a.when("/car2go",{templateUrl:"views/car2go.html",controller:"Car2goCtrl"}).when("/car2goblack",{templateUrl:"views/car2goblack.html",controller:"Car2goblackCtrl"}).when("/stadtmobil",{templateUrl:"views/stadtmobil.html",controller:"StadtmobilCtrl"}).when("/flinkster",{templateUrl:"views/flinkster.html",controller:"FlinksterCtrl"}).when("/greenwheels",{templateUrl:"views/greenwheels.html",controller:"GreenwheelsCtrl"}).when("/drivenow",{templateUrl:"views/drivenow.html",controller:"DriveNowCtrl"}).otherwise({redirectTo:"/car2go"})}]),angular.module("c2gyoApp").directive("timeInputForm",function(){return{restrict:"E",templateUrl:"views/timeinputform.html",scope:!0,controller:["$scope",function(a){a.isResolution=function(b){return-1!==a.resolution().indexOf(b)},a.isSet=function(a){return this.rental.tab===a},a.setTab=function(a){this.rental.tab=a}}]}}),angular.module("c2gyoApp").directive("billedBox",function(){return{restrict:"E",templateUrl:"views/billedBox.html",scope:!0,controller:["$scope",function(a){a.isResolution=function(b){return-1!==a.resolutionTime.indexOf(b)}}]}}),angular.module("c2gyoApp").directive("navBar",function(){return{restrict:"E",templateUrl:"views/navbar.html",scope:!0,controller:["$scope","$element","$location",function(a,b,c){a.tabs=[{name:"Car2go",url:"car2go"},{name:"Car2goBlack",url:"car2goblack"},{name:"Stadtmobil",url:"stadtmobil"},{name:"Flinkster",url:"flinkster"},{name:"Greenwheels",url:"greenwheels"},{name:"DriveNow",url:"drivenow"}],a.isActive=function(a){return a===c.path()}}]}}),angular.module("c2gyoApp").controller("Car2goCtrl",["$scope","duration","state",function(a,b,c){a.rental=c.rental,a.feeDay=59,a.feeHour=14.9,a.feeMinute=.29,a.feeAdditionalKm=.29,a.resolution=function(){var a=["minutes","minutesStanding","hours","days"];return d().asMinutes()>10080&&a.push("weeks"),a},a.resolutionTime=["minutes","hours","days"];var d=function(){return b.getDurationAll(a.rental)};a.getMinutes=function(){return d().minutes()},a.getHours=function(){return d().hours()},a.getDays=function(){return Math.floor(d().asDays())},a.getMinutesBilled=function(){return e().minutes()},a.getHoursBilled=function(){return e().hours()},a.getDaysBilled=function(){return Math.floor(e().asDays())};var e=function(){var b=a.getMinutes()*a.feeMinute,c=a.getHours()*a.feeHour,d=a.getDays()*a.feeDay,e=a.getMinutes(),f=a.getHours(),g=a.getDays();b>=a.feeHour&&(e=0,b=0,f+=1,c=f*a.feeHour),b+c>=a.feeDay&&(e=0,b=0,f=0,c=0,g+=1,d=g*a.feeDay);var h=moment.duration({minutes:e,hours:f,days:g});return h};a.getFeeTime=function(){var b=a.getMinutesBilled()*a.feeMinute,c=a.getHoursBilled()*a.feeHour,d=a.getDaysBilled()*a.feeDay,e=a.getFeeStanding(),f=b+c+d+e;return f},a.getFeeDistance=function(){var b=(a.rental.distance-50)*a.feeAdditionalKm;return 0>b&&(b=0),b},a.getFeeStanding=function(){return.19*a.rental.timeStanding},a.getFeeAirport=function(){var b=0;return a.rental.car2go.airport&&(b=4.9),b},a.price=function(){return a.getFeeTime()+a.getFeeDistance()+a.getFeeAirport()}}]),angular.module("c2gyoApp").controller("Car2goblackCtrl",["$scope","duration","state",function(a,b,c){a.rental=c.rental,a.feeDay=89,a.feeHour=14.9,a.feeAdditionalKm=.29,a.resolution=function(){var a=["hours","days"];return d().asMinutes()>10080&&a.push("weeks"),a},a.resolutionTime=["hours","days"];var d=function(){return b.getDurationAll(a.rental)};a.getMinutes=function(){return d().minutes()},a.getHours=function(){return d().hours()},a.getDays=function(){return Math.floor(d().asDays())},a.getMinutesBilled=function(){return e().minutes()},a.getHoursBilled=function(){return e().hours()},a.getDaysBilled=function(){return Math.floor(e().asDays())};var e=function(){var b=a.getHours()*a.feeHour,c=a.getDays()*a.feeDay,d=a.getHours(),e=a.getDays();b>=a.feeDay&&(d=0,b=0,e+=1,c=e*a.feeDay);var f=moment.duration({hours:d,days:e});return f};a.getFeeTime=function(){var b=a.getHoursBilled()*a.feeHour,c=a.getDaysBilled()*a.feeDay,d=a.getFeeStanding(),e=b+c+d;return e},a.getFeeDistance=function(){var b=(a.rental.distance-50)*a.feeAdditionalKm;return 0>b&&(b=0),b},a.getFeeStanding=function(){return.19*a.rental.timeStanding},a.getFeeAirport=function(){var b=0;return a.rental.car2goblack.airport&&(b=4.9),b},a.price=function(){return a.getFeeTime()+a.getFeeDistance()+a.getFeeAirport()}}]),angular.module("c2gyoApp").controller("StadtmobilCtrl",["$scope","stadtmobilratebasic","stadtmobilrateclassic","stadtmobilratebusiness","duration","state",function(a,b,c,d,e,f){a.rental=f.rental,a.resolution=function(){return["hours","days","weeks"]},a.resolutionTime=["hours","days","weeks"];var g=function(){return e.getDurationAll(a.rental)};a.getHours=function(){return g().hours()},a.getDays=function(){return Math.floor(g().asDays()%7)},a.getWeeks=function(){return Math.floor(g().asDays()/7)},a.getHoursBilled=function(){return h().hours()},a.getDaysBilled=function(){return Math.floor(h().asDays()%7)},a.getWeeksBilled=function(){return Math.floor(h().asDays()/7)};var h=function(){var b;return b="simple"===a.rental.tab?i():j()},i=function(){var b=k().time,c=a.getHours()*b.hour,d=a.getDays()*b.day,e=a.getHours(),f=a.getDays(),g=a.getWeeks();c>=b.day&&(e=0,c=0,f+=1,d=f*b.day),c+d>=b.week&&(e=0,f=0,g+=1);var h=moment.duration({hours:e,days:f,weeks:g});return h},j=function(){return n().duration},k=function(){var e=a.rental.stadtmobil.carClass,f=a.rental.stadtmobil.tariff,g={};return g="classic"===f||"studi"===f?c[e]:"basic"===f?b[e]:d[e]};a.getFeeTime=function(){var b;return b="simple"===a.rental.tab?l():m()};var l=function(){var b=k().time,c=a.getHoursBilled()*b.hour,d=a.getDaysBilled()*b.day,e=a.getWeeksBilled()*b.week,f=c+d+e;return f},m=function(){return n().fee},n=function(){for(var b=0,c=0,d=0,e=k().time,f=e.day,g=e.week,h=0,i=0,j=0,l=new moment(a.rental.startDate),m=new moment(a.rental.endDate),n=l.clone();n.clone().add(1,"w")<m;)d+=g,n.add(1,"w"),j++;for(var o=n.clone();n.clone().add(1,"d")<m;)c+=f,n.add(1,"d"),i++;c>=g&&(c=g,n=o.add(1,"w"),i=0,j++);for(var p=n.clone();m>p;p.add(1,"h"))for(var q=p.isoWeekday(),r=p.hour(),s=e[q],t=0;t<=s.length-1;t++){var u=s[t].start,v=s[t].end,w=s[t].fee;r>=u&&v>=r&&(b+=w,h++)}b>=f&&(b=f,h=0,i++),c+b>=g&&(b=0,c=g,h=0,i=0,j++);var x=moment.duration({hours:h,days:i,weeks:j}),y=c+b+d;return{duration:x,fee:y}};a.getFeeDistance=function(){for(var b=k().km,c=a.rental.distance,d=0,e=0;c>0;){var f=b[e].start,g=b[e].end,h=b[e].fee,i=g-f;i>=c||-1===g?(d+=c*h,c=0):(c-=i,d+=i*h,e++)}return d},a.price=function(){return a.getFeeTime()+a.getFeeDistance()}}]),angular.module("c2gyoApp").service("duration",function(){this.getDurationSimple=function(a){var b=moment.duration(a.timeMinutes,"m"),c=moment.duration(a.timeHours,"h"),d=moment.duration(a.timeDays,"d"),e=moment.duration(a.timeWeeks,"w"),f=b.add(c).add(d).add(e);return f},this.getDurationExact=function(a){return moment.duration(a.endDate-a.startDate)},this.getDurationAll=function(a){var b;return b="simple"===a.tab?this.getDurationSimple(a):this.getDurationExact(a)}}),angular.module("c2gyoApp").factory("state",function(){var a=(new moment).startOf("hour"),b={tab:"simple",startDate:a.clone().add(1,"h"),endDate:a.clone().add(11,"h"),distance:10,timeMinutes:0,timeHours:10,timeDays:0,timeWeeks:0,timeStanding:0,car2go:{airport:!1},car2goblack:{airport:!1},flinkster:{tariff:"bundesweit",carClass:"sonder",airport:!1},stadtmobil:{tariff:"classic",carClass:"A"},greenwheels:{tariff:"standard",carClass:"compact"},drivenow:{tariff:"mini",airport:{berlintegel:!1,berlinschoenefeld:!1,hamburg:!1,muenchen:!1,cologne:!1,duesseldorf:!1,wien:!1},drivecitytocity:{duesseldorfcologne:!1,cologneduesseldorf:!1,hildengerresheim:!1,neubibergbavariafilmstadt:!1}}};return{rental:b}}),angular.module("c2gyoApp").constant("stadtmobilratebasic",{resolution:"h",A:{time:{1:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.6}],2:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.6}],3:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.6}],4:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.6}],5:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.6}],6:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.6}],7:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.6}],hour:1.6,day:26,week:140},km:[{start:0,end:100,fee:.22},{start:100,end:700,fee:.18},{start:700,end:-1,fee:.18}]},B:{time:{1:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.7}],2:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.7}],3:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.7}],4:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.7}],5:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.7}],6:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.7}],7:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.7}],hour:2.7,day:30,week:155},km:[{start:0,end:100,fee:.27},{start:100,end:700,fee:.21},{start:700,end:-1,fee:.16}]},C:{time:{1:[{start:0,end:6,fee:0},{start:7,end:23,fee:3.3}],2:[{start:0,end:6,fee:0},{start:7,end:23,fee:3.3}],3:[{start:0,end:6,fee:0},{start:7,end:23,fee:3.3}],4:[{start:0,end:6,fee:0},{start:7,end:23,fee:3.3}],5:[{start:0,end:6,fee:0},{start:7,end:23,fee:3.3}],6:[{start:0,end:6,fee:0},{start:7,end:23,fee:3.3}],7:[{start:0,end:6,fee:0},{start:7,end:23,fee:3.3}],hour:3.3,day:37,week:175},km:[{start:0,end:100,fee:.31},{start:100,end:700,fee:.23},{start:700,end:-1,fee:.17}]},D:{time:{1:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.7}],2:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.7}],3:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.7}],4:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.7}],5:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.7}],6:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.7}],7:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.7}],hour:3.7,day:40,week:210},km:[{start:0,end:100,fee:.34},{start:100,end:700,fee:.25},{start:700,end:-1,fee:.25}]},F:{time:{1:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.7}],2:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.7}],3:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.7}],4:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.7}],5:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.7}],6:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.7}],7:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.7}],hour:4.7,day:49,week:260},km:[{start:0,end:100,fee:.38},{start:100,end:700,fee:.27},{start:700,end:-1,fee:.27}]}}),angular.module("c2gyoApp").constant("stadtmobilrateclassic",{resolution:"h",A:{time:{1:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.4}],2:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.4}],3:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.4}],4:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.4}],5:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.4}],6:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.4}],7:[{start:0,end:6,fee:0},{start:7,end:23,fee:1.4}],hour:1.4,day:21,week:125},km:[{start:0,end:100,fee:.2},{start:100,end:700,fee:.18},{start:700,end:-1,fee:.18}]},B:{time:{1:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.2}],2:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.2}],3:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.2}],4:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.2}],5:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.2}],6:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.2}],7:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.2}],hour:2.2,day:25,week:140},km:[{start:0,end:100,fee:.22},{start:100,end:700,fee:.19},{start:700,end:-1,fee:.16}]},C:{time:{1:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.8}],2:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.8}],3:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.8}],4:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.8}],5:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.8}],6:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.8}],7:[{start:0,end:6,fee:0},{start:7,end:23,fee:2.8}],hour:2.8,day:32,week:160},km:[{start:0,end:100,fee:.26},{start:100,end:700,fee:.21},{start:700,end:-1,fee:.17}]},D:{time:{1:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.2}],2:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.2}],3:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.2}],4:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.2}],5:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.2}],6:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.2}],7:[{start:0,end:6,fee:1},{start:7,end:23,fee:3.2}],hour:3.2,day:35,week:190},km:[{start:0,end:100,fee:.29},{start:100,end:700,fee:.25},{start:700,end:-1,fee:.25}]},F:{time:{1:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.2}],2:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.2}],3:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.2}],4:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.2}],5:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.2}],6:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.2}],7:[{start:0,end:6,fee:2},{start:7,end:23,fee:4.2}],hour:4.2,day:44,week:245},km:[{start:0,end:100,fee:.33},{start:100,end:700,fee:.27},{start:700,end:-1,fee:.27}]}}),angular.module("c2gyoApp").constant("stadtmobilratebusiness",{resolution:"h",A:{time:{1:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.3}],2:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.3}],3:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.3}],4:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.3}],5:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.3}],6:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.3}],7:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.3}],hour:1.3,day:20,week:115},km:[{start:0,end:-1,fee:.17}]},B:{time:{1:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.9}],2:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.9}],3:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.9}],4:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.9}],5:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.3},{start:16,end:23,fee:1.9}],6:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.9},{start:16,end:23,fee:1.9}],7:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.9},{start:16,end:23,fee:1.9}],hour:1.9,day:22,week:125},km:[{start:0,end:-1,fee:.17}]},C:{time:{1:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.9},{start:16,end:23,fee:2.3}],2:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.9},{start:16,end:23,fee:2.3}],3:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.9},{start:16,end:23,fee:2.3}],4:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.9},{start:16,end:23,fee:2.3}],5:[{start:0,end:6,fee:0},{start:7,end:15,fee:1.9},{start:16,end:23,fee:2.3}],6:[{start:0,end:6,fee:0},{start:7,end:15,fee:2.3},{start:16,end:23,fee:2.3}],7:[{start:0,end:6,fee:0},{start:7,end:15,fee:2.3},{start:16,end:23,fee:2.3}],hour:2.3,day:28,week:145},km:[{start:0,end:-1,fee:.18}]},D:{time:{1:[{start:0,end:6,fee:1},{start:7,end:15,fee:3},{start:16,end:23,fee:3}],2:[{start:0,end:6,fee:1},{start:7,end:15,fee:3},{start:16,end:23,fee:3}],3:[{start:0,end:6,fee:1},{start:7,end:15,fee:3},{start:16,end:23,fee:3}],4:[{start:0,end:6,fee:1},{start:7,end:15,fee:3},{start:16,end:23,fee:3}],5:[{start:0,end:6,fee:1},{start:7,end:15,fee:3},{start:16,end:23,fee:3}],6:[{start:0,end:6,fee:1},{start:7,end:15,fee:3},{start:16,end:23,fee:3}],7:[{start:0,end:6,fee:1},{start:7,end:15,fee:3},{start:16,end:23,fee:3}],hour:3,day:32,week:175},km:[{start:0,end:-1,fee:.25}]},F:{time:{1:[{start:0,end:6,fee:2},{start:7,end:15,fee:3.8},{start:16,end:23,fee:3.8}],2:[{start:0,end:6,fee:2},{start:7,end:15,fee:3.8},{start:16,end:23,fee:3.8}],3:[{start:0,end:6,fee:2},{start:7,end:15,fee:3.8},{start:16,end:23,fee:3.8}],4:[{start:0,end:6,fee:2},{start:7,end:15,fee:3.8},{start:16,end:23,fee:3.8}],5:[{start:0,end:6,fee:2},{start:7,end:15,fee:3.8},{start:16,end:23,fee:3.8}],6:[{start:0,end:6,fee:2},{start:7,end:15,fee:3.8},{start:16,end:23,fee:3.8}],7:[{start:0,end:6,fee:2},{start:7,end:15,fee:3.8},{start:16,end:23,fee:3.8}],hour:3.8,day:40,week:230},km:[{start:0,end:-1,fee:.27}]}}),angular.module("c2gyoApp").directive("priceBox",function(){return{restrict:"E",templateUrl:"views/priceBox.html",scope:!0,controller:["$scope",function(a){a.pricePerKm=function(){var b=0;return a.rental.distance&&(b=a.price()/a.rental.distance),b}}]}}),angular.module("c2gyoApp").controller("FlinksterCtrl",["$scope","flinksterratebundesweit","flinksterratelokal","duration","state",function(a,b,c,d,e){a.rental=e.rental,a.resolution=function(){return["hours","days","weeks"]},a.resolutionTime=["hours","days","weeks"];var f=function(){return d.getDurationAll(a.rental)};a.getHours=function(){return f().hours()},a.getDays=function(){return Math.floor(f().asDays()%7)},a.getWeeks=function(){return Math.floor(f().asDays()/7)},a.getHoursBilled=function(){return g().hours()},a.getDaysBilled=function(){return Math.floor(g().asDays()%7)},a.getWeeksBilled=function(){return Math.floor(g().asDays()/7)};var g=function(){var b;return b="simple"===a.rental.tab?h():i()},h=function(){var b=j().time,c=a.getHours()*b.hour,d=a.getDays()*b.day1,e=a.getHours(),f=a.getDays(),g=a.getWeeks();c>=b.day&&(e=0,c=0,f+=1,d=f*b.day),c+d>=b.week&&(e=0,f=0,g+=1);var h=moment.duration({hours:e,days:f,weeks:g});return h},i=function(){return m().duration},j=function(){var d=a.rental.flinkster.carClass,e=a.rental.flinkster.tariff,f={};return"lokal"===e?f=c[d]:(f=b[d],f.time.week=7*f.time.day1),f};a.getFeeTime=function(){var b;return b="simple"===a.rental.tab?k():l()};var k=function(){var b=j().time,c=a.getHoursBilled()*b.hour,d=a.getDaysBilled()*b.day1,e=a.getWeeksBilled()*b.week,f=c+d+e;return a.rental.flinkster.airport&&"bundesweit"===a.rental.flinkster.tariff&&(f=1.25*f),f},l=function(){return m().fee},m=function(){var b=0,c=0,d=0,e=j().time,f=e.day1,g=e.week,h=0,i=0,k=0,l=new moment(a.rental.startDate),m=new moment(a.rental.endDate),n=l.clone(),o=a.rental.flinkster.tariff;if("lokal"===o)for(;n.clone().add(1,"w")<m;)d+=g,n.add(1,"w"),k++;for("bundesweit"===o&&n.clone().add(1,"d")<m&&(c+=f,n.add(1,"d"),f=e.day2,i++);n.clone().add(1,"d")<m;)c+=f,n.add(1,"d"),i++;for(var p=n.clone();m>p;p.add(1,"h"))for(var q=p.isoWeekday(),r=p.hour(),s=e[q],t=0;t<=s.length-1;t++){var u=s[t].start,v=s[t].end,w=s[t].fee;r>=u&&v>=r&&(b+=w,h++)}b>=f&&(b=f,h=0,i++),"lokal"===o&&c+b>=g&&(b=0,c=g,h=0,i=0,k++);var x=moment.duration({hours:h,days:i,weeks:k}),y=c+b+d;return a.rental.flinkster.airport&&"bundesweit"===a.rental.flinkster.tariff&&(y=1.25*y),{duration:x,fee:y}};a.getFeeDistance=function(){for(var b=j().km,c=a.rental.distance,d=0,e=0;c>0;){var f=b[e].start,g=b[e].end,h=b[e].fee,i=g-f;i>=c||-1===g?(d+=c*h,c=0):(c-=i,d+=i*h,e++)}return d},a.price=function(){return a.getFeeTime()+a.getFeeDistance()},a.isAirport=function(){return"bundesweit"===a.rental.flinkster.tariff?!0:!1}}]),angular.module("c2gyoApp").constant("flinksterratebundesweit",{resolution:"h",sonder:{time:{1:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.5},{start:22,end:23,fee:1.5}],2:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.5},{start:22,end:23,fee:1.5}],3:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.5},{start:22,end:23,fee:1.5}],4:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.5},{start:22,end:23,fee:1.5}],5:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.5},{start:22,end:23,fee:1.5}],6:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.5},{start:22,end:23,fee:1.5}],7:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.5},{start:22,end:23,fee:1.5}],hour:2.5,day1:40,day2:29},km:[{start:0,end:-1,fee:.2}]},mini:{time:{1:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.3},{start:22,end:23,fee:1.5}],2:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.3},{start:22,end:23,fee:1.5}],3:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.3},{start:22,end:23,fee:1.5}],4:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.3},{start:22,end:23,fee:1.5}],5:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.3},{start:22,end:23,fee:1.5}],6:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.3},{start:22,end:23,fee:1.5}],7:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:2.3},{start:22,end:23,fee:1.5}],hour:2.3,day1:39,day2:29},km:[{start:0,end:-1,fee:.18}]},klein:{time:{1:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:5},{start:22,end:23,fee:1.5}],2:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:5},{start:22,end:23,fee:1.5}],3:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:5},{start:22,end:23,fee:1.5}],4:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:5},{start:22,end:23,fee:1.5}],5:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:5},{start:22,end:23,fee:1.5}],6:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:5},{start:22,end:23,fee:1.5}],7:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:5},{start:22,end:23,fee:1.5}],hour:5,day1:50,day2:29},km:[{start:0,end:-1,fee:.18}]},kompakt:{time:{1:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:6},{start:22,end:23,fee:1.9}],2:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:6},{start:22,end:23,fee:1.9}],3:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:6},{start:22,end:23,fee:1.9}],4:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:6},{start:22,end:23,fee:1.9}],5:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:6},{start:22,end:23,fee:1.9}],6:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:6},{start:22,end:23,fee:1.9}],7:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:6},{start:22,end:23,fee:1.9}],hour:6,day1:60,day2:39},km:[{start:0,end:-1,fee:.18}]},mittel:{time:{1:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:7},{start:22,end:23,fee:1.9}],2:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:7},{start:22,end:23,fee:1.9}],3:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:7},{start:22,end:23,fee:1.9}],4:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:7},{start:22,end:23,fee:1.9}],5:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:7},{start:22,end:23,fee:1.9}],6:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:7},{start:22,end:23,fee:1.9}],7:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:7},{start:22,end:23,fee:1.9}],hour:7,day1:70,day2:49},km:[{start:0,end:-1,fee:.2}]},transporter:{time:{1:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:8},{start:22,end:23,fee:1.9}],2:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:8},{start:22,end:23,fee:1.9}],3:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:8},{start:22,end:23,fee:1.9}],4:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:8},{start:22,end:23,fee:1.9}],5:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:8},{start:22,end:23,fee:1.9}],6:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:8},{start:22,end:23,fee:1.9}],7:[{start:0,end:7,fee:1.9},{start:8,end:21,fee:8},{start:22,end:23,fee:1.9}],hour:8,day1:80,day2:59},km:[{start:0,end:-1,fee:.2}]}}),angular.module("c2gyoApp").constant("flinksterratelokal",{resolution:"h",sonder:{time:{1:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],2:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],3:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],4:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],5:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],6:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],7:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],hour:1.75,day1:19.5,week:120},km:[{start:0,end:-1,fee:.26}]},mini:{time:{1:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],2:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],3:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],4:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],5:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],6:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],7:[{start:0,end:7,fee:0},{start:8,end:21,fee:1.75},{start:22,end:23,fee:0}],hour:1.75,day1:19.5,week:120},km:[{start:0,end:-1,fee:.26}]},klein:{time:{1:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.25},{start:22,end:23,fee:1}],2:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.25},{start:22,end:23,fee:1}],3:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.25},{start:22,end:23,fee:1}],4:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.25},{start:22,end:23,fee:1}],5:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.25},{start:22,end:23,fee:1}],6:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.25},{start:22,end:23,fee:1}],7:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.25},{start:22,end:23,fee:1}],hour:2.25,day1:24.5,week:130},km:[{start:0,end:-1,fee:.26}]},kompakt:{time:{1:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.75},{start:22,end:23,fee:1}],2:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.75},{start:22,end:23,fee:1}],3:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.75},{start:22,end:23,fee:1}],4:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.75},{start:22,end:23,fee:1}],5:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.75},{start:22,end:23,fee:1}],6:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.75},{start:22,end:23,fee:1}],7:[{start:0,end:7,fee:1},{start:8,end:21,fee:2.75},{start:22,end:23,fee:1}],hour:2.75,day1:29.5,week:160},km:[{start:0,end:-1,fee:.26}]},mittel:{time:{1:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],2:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],3:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],4:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],5:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],6:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],7:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],hour:4.75,day1:39.5,week:250},km:[{start:0,end:-1,fee:.29}]},transporter:{time:{1:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],2:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],3:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],4:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],5:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],6:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],7:[{start:0,end:7,fee:1.5},{start:8,end:21,fee:4.75},{start:22,end:23,fee:1.5}],hour:4.75,day1:39.5,week:250},km:[{start:0,end:-1,fee:.29}]}}),angular.module("c2gyoApp").directive("tariffPopover",function(){return{restrict:"A",transclude:!0,scope:{text:"@tariffPopover"},template:'<span ng-transclude></span>&nbsp;<span popover-placement="right"       popover-template="text"       popover-trigger="mouseenter"       class="fa fa-info-circle"></span>'}}),angular.module("c2gyoApp").controller("GreenwheelsCtrl",["$scope","greenwheelsratestandard","greenwheelsratejoker","duration","state",function(a,b,c,d,e){a.rental=e.rental,a.resolution=function(){return["hours","days","weeks"]},a.resolutionTime=["hours","days","weeks"];var f=function(){return d.getDurationAll(a.rental)};a.getHours=function(){return f().hours()},a.getDays=function(){return Math.floor(f().asDays()%7)},a.getWeeks=function(){return Math.floor(f().asDays()/7)},a.getHoursBilled=function(){return g().hours()},a.getDaysBilled=function(){return Math.floor(g().asDays()%7)},a.getWeeksBilled=function(){return Math.floor(g().asDays()/7)};var g=function(){var b;return b="simple"===a.rental.tab?h():i()},h=function(){var b=j().time,c=a.getHours()*b.hour,d=a.getDays()*b.day,e=a.getHours(),f=a.getDays(),g=a.getWeeks();c>=b.day&&(e=0,c=0,f+=1,d=f*b.day),c+d>=b.week&&(e=0,f=0,g+=1);var h=moment.duration({hours:e,days:f,weeks:g});return h},i=function(){return m().duration},j=function(){var d=a.rental.greenwheels.carClass,e=a.rental.greenwheels.tariff,f={};return f="standard"===e?b[d]:c[d]};a.getFeeTime=function(){var b;return b="simple"===a.rental.tab?k():l()};var k=function(){var b=j().time,c=a.getHoursBilled()*b.hour,d=a.getDaysBilled()*b.day,e=a.getWeeksBilled()*b.week,f=c+d+e;return f},l=function(){return m().fee},m=function(){for(var b=0,c=0,d=0,e=j().time,f=e.day,g=e.week,h=0,i=0,k=0,l=new moment(a.rental.startDate),m=new moment(a.rental.endDate),n=l.clone();n.clone().add(1,"w")<m;)d+=g,n.add(1,"w"),k++;for(;n.clone().add(1,"d")<m;)c+=f,n.add(1,"d"),i++;for(var o=n.clone();m>o;o.add(1,"h"))for(var p=o.isoWeekday(),q=o.hour(),r=e[p],s=0;s<=r.length-1;s++){var t=r[s].start,u=r[s].end,v=r[s].fee;q>=t&&u>=q&&(b+=v,h++)}b>=f&&(b=f,h=0,i++),c+b>=g&&(b=0,c=g,h=0,i=0,k++);var w=moment.duration({hours:h,days:i,weeks:k}),x=c+b+d;return{duration:w,fee:x}};a.getFeeDistance=function(){for(var b=j().km,c=a.rental.distance,d=0,e=0;c>0;){var f=b[e].start,g=b[e].end,h=b[e].fee,i=g-f;i>=c||-1===g?(d+=c*h,c=0):(c-=i,d+=i*h,e++)}return d},a.price=function(){return a.getFeeTime()+a.getFeeDistance()}}]),angular.module("c2gyoApp").constant("greenwheelsratestandard",{resolution:"h",compact:{time:{1:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],2:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],3:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],4:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],5:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],6:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],7:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],hour:1.99,day:39.76,week:278.32},km:[{start:0,end:-1,fee:.24}]},van:{time:{1:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],2:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],3:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],4:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],5:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],6:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],7:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],hour:3.99,day:71.76,week:502.32},km:[{start:0,end:-1,fee:.34}]}}),angular.module("c2gyoApp").constant("greenwheelsratejoker",{resolution:"h",compact:{time:{1:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],2:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],3:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],4:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],5:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],6:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],7:[{start:0,end:7,fee:.99},{start:8,end:23,fee:1.99}],hour:1.99,day:30,week:210},km:[{start:0,end:-1,fee:.24}]},van:{time:{1:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],2:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],3:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],4:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],5:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],6:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],7:[{start:0,end:7,fee:.99},{start:8,end:23,fee:3.99}],hour:3.99,day:40,week:280},km:[{start:0,end:-1,fee:.34}]}}),angular.module("c2gyoApp").controller("DriveNowCtrl",["$scope","drivenowrate","duration","state",function(a,b,c,d){a.rental=d.rental,a.resolution=function(){var a=["minutes","minutesStanding","hours","days"];return e().asMinutes()>10080&&a.push("weeks"),a},a.resolutionTime=["minutes","hours","days"];var e=function(){return c.getDurationAll(a.rental)};a.getMinutes=function(){return e().minutes()},a.getHours=function(){return e().hours()},a.getDays=function(){return Math.floor(e().asDays())},a.getMinutesBilled=function(){return e().minutes()},a.getHoursBilled=function(){return e().hours()},a.getDaysBilled=function(){return Math.floor(e().asDays())};var f=function(){var c=a.rental.drivenow.tariff;return b[c]};a.getFeeTime=function(){var b;return b="simple"===a.rental.tab?g():h()};var g=function(){var b=f().time,c=a.getMinutesBilled()*b.minute,d=a.getHoursBilled()*b.minute*60,e=a.getDaysBilled()*b.minute*60*24,g=c+d+e;return g},h=function(){return i().fee},i=function(){return{duration:e(),fee:g()}};a.getFeeDistance=function(){return 0},a.getFeeStanding=function(){return a.rental.timeStanding*b.parking},a.getFeeAirport=function(){var c=0;for(var d in a.rental.drivenow.airport)a.rental.drivenow.airport[d]&&(c+=b.airport[d]);return c},a.getFeeCitytoCity=function(){var c=0;for(var d in a.rental.drivenow.drivecitytocity)a.rental.drivenow.drivecitytocity[d]&&(c+=b.drivecitytocity[d]);
return c},a.price=function(){return a.getFeeStanding()+a.getFeeAirport()+a.getFeeCitytoCity()+a.getFeeTime()+a.getFeeDistance()}}]),angular.module("c2gyoApp").constant("drivenowrate",{resolution:"m",mini:{time:{1:[{start:0,end:23,fee:.31}],2:[{start:0,end:23,fee:.31}],3:[{start:0,end:23,fee:.31}],4:[{start:0,end:23,fee:.31}],5:[{start:0,end:23,fee:.31}],6:[{start:0,end:23,fee:.31}],7:[{start:0,end:23,fee:.31}],minute:.31},km:[{start:0,end:-1,fee:0}]},bmw:{time:{1:[{start:0,end:23,fee:.34}],2:[{start:0,end:23,fee:.34}],3:[{start:0,end:23,fee:.34}],4:[{start:0,end:23,fee:.34}],5:[{start:0,end:23,fee:.34}],6:[{start:0,end:23,fee:.34}],7:[{start:0,end:23,fee:.34}],minute:.34},km:[{start:0,end:-1,fee:0}]},minicabriosummer:{time:{1:[{start:0,end:23,fee:.31}],2:[{start:0,end:23,fee:.31}],3:[{start:0,end:23,fee:.31}],4:[{start:0,end:23,fee:.31}],5:[{start:0,end:23,fee:.31}],6:[{start:0,end:23,fee:.31}],7:[{start:0,end:23,fee:.31}],minute:.31},km:[{start:0,end:-1,fee:0}]},minicabriowinter:{time:{1:[{start:0,end:23,fee:.34}],2:[{start:0,end:23,fee:.34}],3:[{start:0,end:23,fee:.34}],4:[{start:0,end:23,fee:.34}],5:[{start:0,end:23,fee:.34}],6:[{start:0,end:23,fee:.34}],7:[{start:0,end:23,fee:.34}],minute:.34},km:[{start:0,end:-1,fee:0}]},parking:.15,reservation:[{start:15,end:-1,fee:.1}],airport:{berlintegel:4,berlinschoenefeld:6,hamburg:5,muenchen:12,cologne:4,duesseldorf:6,wien:10},drivecitytocity:{duesseldorfcologne:10,cologneduesseldorf:6,hildengerresheim:3,neubibergbavariafilmstadt:3}});