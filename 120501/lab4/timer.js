var div7=document.querySelector('#div7');
var current_date=new Date();
var end_of_year=new Date(current_date.getFullYear(),5,30);
document.querySelector('#spaFir').innerHTML="До конца "+current_date.getFullYear()+" учебного года";
var d=document.querySelector('#spD');
var h=document.querySelector('#spH');
var m=document.querySelector('#spM');
var s=document.querySelector('#spS');
reTime();
function reTime(){
	current_date=new Date();
	var mill = end_of_year - current_date;
	var day=Math.round(mill/1000/3600/24);
	d.innerHTML=Math.round(mill/1000/3600/24);
	h.innerHTML=24-current_date.getHours();
	m.innerHTML=60-current_date.getMinutes();
	s.innerHTML=60-current_date.getSeconds();
	setTimeout(reTime,1000);
}
