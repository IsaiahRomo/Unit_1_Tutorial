"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Isaiah Romo
   Date:   1/6/20

*/
//created a variable for today's date
runClock()
setInterval("runClock()", 10);

function runClock(){

   var currentYear = new Date();
   //changed today's date
   var thisDate  = currentYear.toDateString();
   var thisTime  = currentYear.toLocaleTimeString();

   document.getElementById("dateNow").innerHTML = thisDate + "<br/>" + thisTime;

   var newYear = new Date("January 1, 2020")
   var nextYear = currentYear.getFullYear() +1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentYear)/(1000*60*60*24);
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   /*
   var x = 7;
   var y = "dateNow";
   var b = null;
   var thisNumberIs8 = 8;
   console.log(x);
   console.log(y);
   */
   //changed countdown clock
   document.getElementById("days").innerHTML = Math.floor(daysLeft);
   document.getElementById("hrs").innerHTML = Math.floor(hrsLeft);
   document.getElementById("mins").innerHTML = Math.floor(minsLeft);
   document.getElementById("secs").innerHTML = Math.ceil(secsLeft);
}
/*
function rectArea(length, width){
   var area = length * width;
   return area;
}
var rect = rectArea(5, 2);
console.log(rect);
console.log(rectArea(200, 40));

function circArea(radius){
   var area = Math.PI * Math.pow(radius, 2);
   return area;
}
console.log(circArea(10));

function distance(x1, y1, x2, y2){
var dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
   return dist
}
console.log(distance(2, 3, 5, 7));
setTimeout(runClock(), 5);
*/