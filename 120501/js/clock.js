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
			var translateX = getRandomInt(-100);
			var translateY = getRandomInt(-100);
			clock.style.cssText="transform: translate("+translateX+"px,"+translateY+"px); transition-duration: 2s;";
			setTimeout(function(){clock.style.cssText="";}, 2000);
			break;
		case 1:
			clock = document.getElementById("clock");
			var rotation = getRandomInt(359);
			clock.style.cssText="transform: rotate("+rotation+"deg); transition-duration: 2s;";
			setTimeout(function(){clock.style.cssText="";}, 2000);
			break;
		case 2:
			clock = document.getElementById("clock");
			var skew_angle = getRandomInt(70)-35;
			clock.style.cssText="transform: skewX("+skew_angle+"deg); transition-duration: 2s;";
			setTimeout(function(){clock.style.cssText="";}, 2000);
			break;
		case 3:
			clock = document.getElementById("clock");
			var skew_angle = getRandomInt(70)-35;
			clock.style.cssText="transform: skewY("+skew_angle+"deg); transition-duration: 2s;";
			setTimeout(function(){clock.style.cssText="";}, 2000);
			break;
		case 4:
			clock = document.getElementById("clock");
			var scaleX = Math.random();
			var scaleY = Math.random();
			clock.style.cssText="transform: scale("+scaleX+","+scaleY+"); transition-duration: 2s;";
			setTimeout(function(){clock.style.cssText="";}, 2000);
			break;
		case 5:
			clock = document.getElementById("clock");
			var scaleX = Math.random();
			var skew_angleX = Math.random();
			var skew_angleY = Math.random();
			var scaleY = Math.random();
			var translateX = getRandomInt(-100);
			var translateY = getRandomInt(-100);
			clock.style.cssText="transform: matrix("+scaleX+","+skew_angleX+","+skew_angleY+","+scaleY+","+translateX+","+translateY+"); transition-duration: 2s;";
			setTimeout(function(){clock.style.cssText="";}, 2000);
			break;
	}
	
}