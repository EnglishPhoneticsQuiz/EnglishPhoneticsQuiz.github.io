

//RANDOM PROGRAM
var word = [];
var trans = [];
var index = 0;
var back = 0;
var corr = 0;
var wro = 0;


//function next transcription

function nexttranscription() {
		function RndNumber() {
			return Math.floor(Math.random() * (3511 - 1) ) + 1;	
		}
		index = RndNumber();
		document.getElementById("writeaword").innerHTML = word[index];

//hide correct and wrong		
		document.getElementById("correctorwrong").style.visibility = "hidden";
	

//clear old transcription
		document.getElementById("transcription").innerHTML = '&nbsp;';
		document.getElementById("transcriptionshown").innerHTML = '&nbsp;';
		document.getElementById("transcriptionshown").className = "normal";
}

//show transcription
function showtranscription() {
		document.getElementById("transcriptionshown").innerHTML = trans[index];
		document.getElementById("transcriptionshown").style.visibility = "visible";
		document.getElementById("transcriptionshown").className = "wrong";
		
}

	


//clear all the transcriptions
function cleartranscription() {
	document.getElementById("transcription").innerHTML = '&nbsp;';
	
	document.getElementById("transcriptionshown").innerHTML = '&nbsp;';
	document.getElementById("transcriptionshown").className = "normal";

	document.getElementById("correctorwrong").style.visibility = "hidden";

}

//backspace
function backspace() {
	back = document.getElementById("transcription").innerHTML;
	back = back.substring(0, back.length - 1);
	//console.log(back.toString());
	document.getElementById("transcription").innerHTML = back;
	
	if (document.getElementById("transcription").innerHTML == "") {
		document.getElementById("transcription").innerHTML = '&nbsp;';
	}
}


//check transcription
function checktranscription() {
	document.getElementById("transcriptionshown").innerHTML = trans[index];
	document.getElementById("transcriptionshown").style.visibility = "hidden";
	corr = document.getElementById("transcription").innerHTML;
	wro = document.getElementById("transcriptionshown").innerHTML;
	console.log(corr);
	console.log(wro);
	
	if (corr == wro) {
		document.getElementById("correctorwrong").innerHTML = "CORRECT!";
		document.getElementById("correctorwrong").className = "correct";
		document.getElementById("correctorwrong").style.visibility = "visible";
		
		
	}
	else {
		document.getElementById("correctorwrong").innerHTML = "WRONG!";
		document.getElementById("correctorwrong").className = "wrong";
		document.getElementById("correctorwrong").style.visibility = "visible";
	}
}

