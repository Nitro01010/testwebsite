window.onload = function(){
	stopwatch = document.getElementById("timer");
	actualtimer = document.getElementById("actualtimer");
	timer  = 0
	powerstate = false;
	x = 0
	y = 0;
	z = 0;
}


function output(){
	stopwatch.innerHTML = `${y}:${z}`
	actualtimer.innerHTML = timer;
}
function increment(){
	timer++;
}
function floor(a){
	Math.floor(a)
}
function innerStart(){
	timer++;
	if(Math.floor(timer / 100) >= 1){
		y = Math.floor(timer/100);
		if(y < 10){y = `0${y}`}
	}
	else{
		y = "00"
	}
	z = timer -100*(Math.floor(timer/100));
	if(z < 10){
		z = `0${z}`;
	}
}




function start(){
	if(powerstate  == false){
		interval = setInterval(innerStart,10)
		powerstate = true
	}
}
function stop(){
	if(powerstate == true){
		clearInterval(interval)
		powerstate = false;
	}
}
function reset(){
	timer = -1;
	innerStart();
	powerstate = false;
}







function newStart(){
	let decimaltimer = timer/100
	let decimaltimerrounded = Math.floor(decimaltimer)
	if(){
		
	}
	else{
		
	}


}
