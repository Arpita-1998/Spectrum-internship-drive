var today=new Date();
var date=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = 'Time:' +' ' +time +'.' +'Date:' +' ' +date;
var newdateTime = dateTime.replace(/\./g, "<br/>"); /* replace . with <br> */

document.getElementById('dateandtime').innerHTML = newdateTime;
