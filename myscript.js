var data = [];

var i=0

function tryme() {
	i = Math.floor(Math.random() * data.length);
	document.getElementById("chinese").innerHTML=data[i]['chinese'];
	document.getElementById("english").innerHTML="reveal";
	document.getElementById("pinyin").innerHTML="reveal";
}

function reveal(mydiv) {
	document.getElementById(mydiv).innerHTML=data[i][mydiv];
}