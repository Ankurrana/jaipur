function tickler(){
	toUpperButtonUpdate();
}

setInterval(function(){ tickler() },100);

function toUpperButtonUpdate(){
	var a = document.getElementById("toupperbutton");
	if(pageYOffset > window.innerHeight - 500){
		a.style.opacity = 1;
	}
	else
		a.style.opacity = 0;
}


var s = document.getElementById("toupperbutton");
s.style.opacity = 0;
s.onclick = function(){
	window.scrollTo(0,0);
}

	
