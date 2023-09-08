$(document).ready(function(){


/*
* Fixed The Position Of Header On Desktop
* And Make Footer Responsive
*/
if ($(document).width() > 767) {

  $("#footer").removeClass("text-center");
  $("#Navbar").addClass("fixed-top");



}



	//	 Scroll Function
	$(document).scroll(function(){
		
		/*
		* On Desktop
		* Change Background Of Navbar On Scroll 
		*/
		if ($(window).width() > 767) {
			if ($(document).scrollTop() > 10) {
				$("#Navbar").css("background", "#002945");
				$(".navbar .nav-link").css("font-size", "15px");
				$("#socialLink").addClass("socialafterScroll");
			}
			else if ($(document).scrollTop() < 10) {
				$("#Navbar").css("background", "transparent");
				$(".navbar .nav-link").css("font-size", "16px");
				$("#socialLink").removeClass("socialafterScroll");				
			}
		}
	});
});


/*
*Statics Animation
*Using Intersection Observer
*/
const ids = [
	"places",
	"people",
	"images",
	"happy"
];
const elementToAnimate = document.querySelectorAll(".animateIO");

/*
* Intersection Observer
*/

// Options for intersection observer
const options = {
	root: null,
	threshold: 0.25
};
// Intersection Observer Start
const observer = new IntersectionObserver(function(entries, observer){
		entries.forEach(entry =>{
			if (entry.isIntersecting) {
				let targetId = entry.target.getAttribute("id");
				if (targetId == "statics") {
					ids.forEach(id => {
						increaseNumAnimation(id);
					});
				}
				observer.unobserve(entry.target);
			}
		});
}, options);

// Calling Intersection Observer To Observe
elementToAnimate.forEach(el =>{
	observer.observe(el);
})



/*
* Animations Using By Intersection Observer
*/


// Number Animator
function increaseNumAnimation(elemId){
	var max = document.getElementById(elemId).getAttribute("data-num");
	var element = document.getElementById(elemId);
	var num = 0;
	var interval = setInterval(function(){
		element.innerHTML = num;
		++num;
		if (num > max) {
			clearInterval(interval);
		}
	}, 10);
}

