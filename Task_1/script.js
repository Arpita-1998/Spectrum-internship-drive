function showTime(){

var today = new Date();

var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
var hour = today.getHours();
var min = today.getMinutes();
var secs = today.getSeconds();

if (hour > 12) { hour = hour-12 ; }
if (hour == 0) { hour = 12 ; }

const AmPm = today.getHours() >= 12 ? 'PM' : 'AM';

var dateTime = 'Time:' +' ' +hour +':' +min +':' +secs +' ' +AmPm +'.' +'Date:' +' ' +date +'/' +month +'/' +year;
var newdateTime = dateTime.replace(/\./g, "<br/>"); /* replace . with <br> */

document.getElementById('dateandtime').innerHTML = newdateTime;

setTimeout(showTime, 1000); /* showTime() is called repeatedly after every 1000ms, i.e. 1sec */

}

showTime();
