var start = 1900;
var end = new Date().getFullYear();
var options = "";
for(var year = start ; year <=end; year++){
  options += "<option>"+ year +"</option>";
}
document.getElementById("year").innerHTML = options;


var button = document.getElementById("Generate");
button.addEventListener("click", Generate);

function Generate(){
	var bookTitle = document.getElementById("input-title").value;
	document.getElementById("book-title").innerHTML = bookTitle;

	var bookSubtitle = document.getElementById("input-subtitle").value;
	document.getElementById("book-subtitle").innerHTML = bookSubtitle;

	var authorName = document.getElementById("input-author").value;
	document.getElementById("author").innerHTML = "by " + authorName;

	var backgroundColor = document.getElementById("input-background").value;
	document.getElementById("section2").style.backgroundColor = backgroundColor;

	var publisher = document.getElementById("input-publisher").value;
	document.getElementById("publisher").innerHTML = publisher;

	var publishingYear = document.getElementById("year");
	var selectOption = publishingYear.options[publishingYear.selectedIndex].value;
	document.getElementById("publishyear").innerHTML = selectOption;
	//var x = document.getElementById("year").value;
	if (document.getElementById('check').checked){
		randombg();
	}
	else{document.getElementById("section2").style.backgroundImage=null;
	}
}

function randombg(){
  var random= Math.floor(Math.random() * 6) + 0;
  var bigSize = ["url('design1.jpg')",
                 "url('design2.jpg')",
                 "url('design3.jpg')",
                 "url('design4.jpg')",
                 "url('design5.jpg')",
                 "url('design6.jpg')"];
  document.getElementById("section2").style.backgroundImage=bigSize[random];
}