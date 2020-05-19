$(window).load(function() {

   /* $(".loader_inner").fadeOut() */
	$(".loader").delay(2000).fadeOut(100); // gif will stay for 2 secs, fade out in 100ms
})


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


// Get the modal
var modal = document.getElementById("myModal");

// Open the Modal
function openModal() {
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



