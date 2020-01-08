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
document.getElementById("dateNow").innerHTML="m/d/y<br/>h:m:s";
var date = new Date("January 7, 2020 16:46:39");
//changed today's date
var thisDate  = date.toLocaleDateString();
var thisTime  = date.toLocaleTimeString();
document.getElementById("dateNow").innerHTML = thisDate + "<br/>" + thisTime;
/*
var x = 7;
var y = "dateNow";
var b = null;
var thisNumberIs8 = 8;
console.log(x);
console.log(y);
*/
//changed countdown clock
document.getElementById("days").innerHTML = "DD";
document.getElementById("hrs").innerHTML = "HH";
document.getElementById("mins").innerHTML = "MM";
document.getElementById("secs").innerHTML = "SS";

var dayTill = 365 - date.getDate() - 1;
var hoursTill = 24 - date.getHours() - 1;
var minTill = 60 - date.getMinutes() - 1;
var secTill = 60 - date.getSeconds();

document.getElementById("days").innerHTML = dayTill;
document.getElementById("hrs").innerHTML = hoursTill;
document.getElementById("mins").innerHTML = minTill;
document.getElementById("secs").innerHTML = secTill;

