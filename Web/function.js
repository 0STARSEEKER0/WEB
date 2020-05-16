function outArrayData (country){
	tab_new="";
	if (typeof country == "string")
		tab_new +=country;
	else{
		tab_new += country[0]+"<br>&#171;"+country[1]+"&#187;<br>("+country[2]+");";
	}
	return tab_new;
}

function makeTableFromCountry (countries){
	i=2;
	
    tab="<table width=100%>";
    tab+="<tr><td bgcolor = #C0C0C0><h1 align=center>"+countries[0]+"-"+countries[1]+"</h1></td>";
	tab+="<tr><td><table width = 75% align=center>";
	tab+="<tr><td>"+about[2]+"</td><td>"+countries[2]+"</td></tr>";
	tab+="<tr><td>"+about[3]+"</td><td>"+countries[3]+"</td></tr>";
	tab+="<tr><td>"+about[4]+"</td><td>"+countries[4]+"</td></tr>";
	tab+="<tr><td>"+about[5]+"</td><td>"+countries[5]+"</td></tr>";
	
	tab+="</td></table>";
	var gObj=countries[6].map(outArrayData);
	tabl="<tr><td><table align=center>";
	tabl+="<td valign = top>"+about[6]+"</td>";
	tabl+="<td>"
	gObj.map(
	   function(item){tabl+="<p>&#1010"+i+";"+item+"</p>"; i++;});
	tabl+="</td>";
	tabl+="</td></table>";
	tab+=tabl;
	
	i=2;
	
	var gObj=countries[7].map(outArrayData);
	tabl="<tr><td><table align=center>";
	tabl+="<td valign = top>"+about[7]+"</td>";
	tabl+="<td>";
	gObj.map(
	   function(item){tabl+="<p>&#1010"+i+";"+item+"</p>"; i++;});
	tabl+="</td>";
	tabl+="</td></table>";
	tab+=tabl;
	
	tab+="<tr><td align = center><b>Исторические события</b>";
	tab+="<table border = 1 width=100%>"
	tab+="<tr>";
	keys = Object.keys(countries[8]);
	for (var i = 0, l = keys.length; i < l; i++) {
		tab +="<td>"+keys[i] + '-' + countries[8][keys[i]] + "</td>";
	}
	tab+="</tr>";
	tab+="</table>";
    tab+="</table>";
    return tab;
}

window.onload = function tb(){
	myCountryMap=countries.map(makeTableFromCountry);
	myCountryMap.forEach(function(info, i, arr) {
		document.getElementById("1").innerHTML+=info+"<br>";
	});
}