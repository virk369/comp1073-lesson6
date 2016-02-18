"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

	var checkMeOut;

	checkMeOut = document.getElementById("checkMeOut");


	/*
	checkMeOut.onclick(function(){
		console.log("checkMeOut clicked");
	});
	
	*/

	checkMeOut.addEventListener("change",function () {
	/*
	(checkMeOut.checked)? console.log("Its checked") : console.log("Its unchecked"); 
	
	/*if (checkMeOut.checked) {
		console.log("Its Checked");
	}
	else {
		console.log("Its unchecked");
	}
*/
});

})();


/* named function, from a performance perspecctive its slower

(function () {

var checkMeOut;

checkMeOut = document.getElementById("checkMeOut");

checkMeOut.addEventListener("click", namedfun);

function namedfun() {
	console.log("string spiit");
}

})();
*/