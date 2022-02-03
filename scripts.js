let stopwatch = document.getElementById("start")
l = document.createTextNode("asfddaf");
stopwatch.innerHTML("adfsfsd")
timer = 0;




function innerStart(){
	timer+=1;
	i = timer.toString();
	newTimer = document.createTextNode(i);
	stopwatch.appendChild(newTimer);
	document.body.appendChild(stopwatch);
}
function start(){
	setInterval(innerStart,1000)
}
function stop(){
}
function reset(){
}