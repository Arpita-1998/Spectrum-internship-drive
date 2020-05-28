// FOR PRE-LOADER
$(window).load(function() {

   /* $(".loader_inner").fadeOut() */
	$(".loader").delay(2000).fadeOut(100); // gif will stay for 2 secs, fade out in 100ms
})

// FOR DATE and TIME
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

// FOR INACTIVE ROOMS AS PER THE TIME
const t = new Date();
const h = t.getHours();
const m = t.getHours();
var inactive = document.querySelectorAll('.hover-class');
for (var i=0; i<inactive.length; i++) {
    if (h<8 || h>=20) {
	    inactive[i].classList.remove("hover-class"); // disable the hover-effect
    }
}

// FOR MODAL
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

// FOR DEFAULT NOTICE
function defaultinfo(){
var notice = document.getElementById("myNotice");
notice.innerHTML = "<h3> NOTICE </h3> <p> College has been accredited Grade 'A' by National Assesment and Accreditation Council(NAAC) and is conferred with UGC Autonomous status.</p>";
}

// FOR individual room notice
function Notice(obj) {
	var div = obj.id;
	var notice = document.getElementById("myNotice");
	if (div == "Classroom") {
		notice.innerHTML = "<h3> Class-room Rules </h3><ul><li> No food or drinks allowed in Classroom. </li><li> Keep area clean. </li></ul>";
	}
	if (div == "StaffRoom") {
        notice.innerHTML = "<h3> Staff-room </h3> <h3> Open from 10:00 AM to 4:30 pm </h3> <p> The Staff room is strictly for teachers and staffs. </p>";
	}
	if (div == "Lab") {
		notice.innerHTML = "<h3> Laboratory Rules </h3> <h3> Timing: 10:00 AM to 4:30 PM </h3> <ul><li> Lab Record and apron are compulsory for getting entry into the lab. </li> <li> Shoes and bags should be kept outside in the racks provided. </li></ul>";
	}
	if (div == "Conference") {
		notice.innerHTML = "<h3> Conference Room Rules </h3> <h3> Timing: 10:00 AM to 5:00 PM </h3> <ul><li> The conference room is specially for conduting seminars and official meetings.</li><li> The conference room is well-equipped with for smooth conduct of seminars and tech-talks.</li></ul>";
	}
	if (div == "Examination") {
		notice.innerHTML = "<h3> Examination Section </h3> <h3> Timing: 10:00 AM to 4:30 PM </h3> <ul><li>Prohibited area for students.</li><li>Faculties are advised to evaluate the semester examination papers in their respective given time slots.</li><ul>";
	}
	if (div == "Academic") {
		notice.innerHTML = "<h3> Academic Section </h3> <h3> Timing: 10:00 AM to 4:30 PM </h3> <ul><li>Academic section basically deals with querries regarding online payments, optional subjects, scholarships and others related to academics.</li><li> Students are instructed to carry their ID cards for quick reference.</li></ul>";
	}
	if (div == "Principalroom") {
		notice.innerHTML = "<h3> Principal-room </h3> <h3> Prof. (Dr.) P.K.Patra </h3> <p>Contact to the principal should be done between 11:00am to 12:30pm with an application duly signed by the HOD of the respective branch.</p> Email: principalcet@cet.edu.in";
	}
	if (div == "HODRoom") {
		notice.innerHTML = "<h3> HOD-room </h3> <h3> Dr. Meera Viswavandya </h3> <p>Contact to the HoD should be done between 11:00am to 2:00pm with an application duly signed by the Advisor of the respective branch.</p> Phone: 7205799XXX";
	}
	if (div == "ReadingRoom") {
        notice.innerHTML = "<h3> Reading-Room Rules </h3> <h3> Timing: 09:00 AM to 7:00 PM </h3> <ul><li>Students are instructed to maintain discipline in the reading room.</li><li>Students can use the PC services inside the reading room.</li><li>Bringing food items and bag are strictly prohibited.</li></ul>";
	}
	if (div == "Library") {
       notice.innerHTML = "<h3> Library Rules </h3> <h3> Timing: 09:00 AM to 04:00 PM </h3> <ul><li>Please carry your ID card and library card for issue and return of books.</li><li>Books can be issued for atmost two weeks and further keeping the books will incur charges.</li></ul>";
	}
	if (div == "CTTCRoom") {
       notice.innerHTML = "<h3> CTTC-room </h3> <p> All courses offered by CTTC are taught in this room by their faculties. This room is also equipped with machineries and tools for carrying out illustrations to the students. Mostly, the class timig is in the afternoon from 4:30pm onwards.</p> Website: www.cttc.gov.in";
	}
	if (div == "Spectrum") {
       notice.innerHTML = "<h3> Spectrum Club </h3> <p>This is the official room for Spectrum Club where all projects, innovations, activities and fun-stuffs takes place. Students may carry their laptops with them to explore and learn web development, android developments and many more.</p> Contact: www.spectrumcet.com";
	}
	if (div == "MeetingRoom") {
       notice.innerHTML = "<h3> Meeting Room </h3> <p> All official gatherings and meetings takes place in this room. Any club/society of the college must bring a written application from the respective Hod to arrange a meeting in this room.</p> Contact: Arpita Mangaraj, 8637281XXX";
	}
}

    
    	
   


