function showTime(){

var today=new Date();

var date=today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const AmPm = today.getHours() >= 12 ? 'PM' : 'AM';

var dateTime = 'Time:' +' ' +time +' ' +AmPm +'.' +'Date:' +' ' +date;
var newdateTime = dateTime.replace(/\./g, "<br/>"); /* replace . with <br> */

document.getElementById('dateandtime').innerHTML = newdateTime;

setTimeout(showTime, 1000); /* showTime() is called repeatedly after every 1000ms, i.e. 1sec */

}

showTime();

