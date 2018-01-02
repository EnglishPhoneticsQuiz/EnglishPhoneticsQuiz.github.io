//RANDOM PROGRAM
var word = [];
var trans = [];
var prev = [];
var prevtrans = [];
var index = 0;
var back = 0;
var indexprev = 0;
var counter = 0;
var corr = 0;
var wro = 0;


//function next word

function nexttranscription() {
		function RndNumber() {
			return Math.floor(Math.random() * (3511 - 1) ) + 1;	
		}
		index = RndNumber();
		document.getElementById("transcription").innerHTML = trans[index];


//save the current word and transcription in the prev[]-prevtrans[] arrays
		prev[indexprev] = word[index];
		prevtrans[indexprev] = trans[index];
		counter = indexprev;
		indexprev++;
		

		
//hide correct and wrong		
		document.getElementById("correctorwrong").style.visibility = "hidden";
	

//clear old transcription
		document.getElementById("writeaword").innerHTML = '&nbsp;';
		document.getElementById("transcriptionshown").innerHTML = '&nbsp;';
		document.getElementById("transcriptionshown").className = "normal";
}


//previous transcription
function previoustranscription() {
	if (counter == 0) {
		alert("there aren't any previous words");
	} else {
	counter--;
	document.getElementById("transcriptionshown").innerHTML = prev[counter];
	document.getElementById("transcription").innerHTML = prevtrans[counter];
	document.getElementById("transcriptionshown").style.visibility = "visible";
	document.getElementById("transcriptionshown").className = "wrong";
	
	}

//hide correct and wrong		
		document.getElementById("correctorwrong").style.visibility = "hidden";

}



//show transcription
function showtranscription() {
		document.getElementById("transcriptionshown").innerHTML = word[index];
		document.getElementById("transcriptionshown").style.visibility = "visible";
		document.getElementById("transcriptionshown").className = "wrong";
		
}

	


//clear all the transcriptions
function cleartranscription() {
	document.getElementById("writeaword").innerHTML = '&nbsp;';
	
	document.getElementById("transcriptionshown").innerHTML = '&nbsp;';
	document.getElementById("transcriptionshown").className = "normal";

	document.getElementById("correctorwrong").style.visibility = "hidden";

}

//backspace
function backspace() {
	back = document.getElementById("writeaword").innerHTML;
	back = back.substring(0, back.length - 1);
	//console.log(back.toString());
	document.getElementById("writeaword").innerHTML = back;
	
	if (document.getElementById("writeaword").innerHTML == "") {
		document.getElementById("writeaword").innerHTML = '&nbsp;';
	}
}


//check transcription
function checktranscription() {
	document.getElementById("transcriptionshown").innerHTML = word[index];
	document.getElementById("transcriptionshown").style.visibility = "hidden";
	corr = document.getElementById("writeaword").innerHTML;
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
