var div7=document.querySelector('#clock');

var time = new Date();
var h = time.getHours();
var m = time.getMinutes();
var s = time.getSeconds();

var h=document.querySelector('#Hours');
var m=document.querySelector('#Minutes');
var s=document.querySelector('#Seconds');

reTime();
function reTime(){
	time=new Date();
	if (time.getHours() < 10)
	h.innerHTML="0"+time.getHours();
	else h.innerHTML=time.getHours();
	if (time.getMinutes() < 10)
	m.innerHTML="0"+time.getMinutes();
	else m.innerHTML=time.getMinutes();
	if (time.getSeconds() < 10)
	s.innerHTML="0"+time.getSeconds();
	else s.innerHTML=time.getSeconds();
	setTimeout(reTime,1000);
}

div7.addEventListener('click', _transform);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function _transform(){
	tr = getRandomInt(6);
	switch(tr){
		case 0:
			clock = document.getElementById("clock");
			clock.className = "clock-change-translate";
			setTimeout(function(){clock.className = "clock1";}, 2000);
			break;
		case 1:
			clock = document.getElementById("clock");
			clock.className = "clock-change-rotate";
			setTimeout(function(){clock.className = "clock1";}, 2000);
			break;
		case 2:
			clock = document.getElementById("clock");
			clock.className = "clock-change-scale";
			setTimeout(function(){clock.className = "clock1";}, 2000);
			break;
		case 3:
			clock = document.getElementById("clock");
			clock.className = "clock-change-skewX";
			setTimeout(function(){clock.className = "clock1";}, 2000);
			break;
		case 4:
			clock = document.getElementById("clock");
			clock.className = "clock-change-skewY";
			setTimeout(function(){clock.className = "clock1";}, 2000);
			break;
		case 5:
			clock = document.getElementById("clock");
			clock.className = "clock-change-matrix";
			setTimeout(function(){clock.className = "clock1";}, 2000);
			break;
	}
	
}