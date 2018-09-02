var h;
function zhu() {
	h = document.documentElement.clientHeight;
	var zhuye = document.getElementsByClassName("zhuye");
	for(var i = 0; i < zhuye.length; i++) {
		zhuye[i].style.height = h + "px";
	}

}
zhu();
setInterval(listenDv, 300);

function listenDv() {
	//document.addEventListener("mousewheel", function() {
	var geth = document.documentElement.scrollTop;
	var cliHt = document.documentElement.clientHeight;
	//	console.log(geth)
	var haveShow = new Array(9);
	haveShow = false;
	if(geth < 211) {
		reset();
	} else if(geth >= cliHt / 2 && geth <= cliHt * 1.5) {
		//重置其他页面reset()
		if(!haveShow[0]) {
			reset();
			haveShow = true;
		}
		//第二个页面出现
		var dv = document.getElementById("tu1");
		first(dv);
		var zi = document.getElementById("zi1");
		setTimeout(showText(zi), 500);
	} else if(geth > cliHt * 1.3 && geth <= cliHt * 1.35) {
		//重置其他页面reset()
		reset();
		haveShow = false;
		//第二个页面出现
		//重置其他页面控制变量eg:haveShow = false;
	} else if(geth > cliHt * 1.2 && geth <= cliHt * 2.35) {
		if(!haveShow[1]) {
			reset();
			haveShow = true;
		}
		var dv = document.getElementById("first");
		setTimeout(second(dv), 500);
	} else if(geth > cliHt * 2.25 && geth <= cliHt * 2.3) {
		reset();
		haveShow = false;
	}
	else if(geth > cliHt * 2.3 && geth <= cliHt*3.3){
		if(!haveShow[2]) {
			reset();
			haveShow = true;
		}
		var dv = document.getElementById("tu3");
		setTimeout(third(dv), 500);
	}else if(geth > cliHt * 3.1 && geth <= cliHt * 3.15) {
		reset();
		haveShow = false;
}else if(geth > cliHt * 3.05 && geth <= cliHt*4.2){
		if(!haveShow[3]) {
			reset();
			haveShow = true;
		}
		var dv = document.getElementById("tu4");
		setTimeout(four(dv), 500);
	}else if(geth > cliHt * 4.2 && geth <= cliHt * 4.25) {
		reset();
		haveShow = false;
	}else if(geth > cliHt * 4.0 && geth <= cliHt*5.2){
		if(!haveShow[4]) {
			reset();
			haveShow = true;
		}
		var dv = document.getElementById("tu5");
		setTimeout(five(dv), 500);
	}else if(geth > cliHt * 4.05 && geth <= cliHt * 4.85) {
		reset();
		haveShow = false;
	}else if(geth > cliHt * 4.85 && geth <= cliHt*6.2){
		if(!haveShow[5]) {
			reset();
			haveShow = true;
		}
		var dv = document.getElementById("tu6");
		setTimeout(six(dv), 500);
	}else if(geth > cliHt * 6.2 && geth <= cliHt * 6.25) {
		reset();
		haveShow = false;
	}
	else if(geth > cliHt * 6.0 && geth <= cliHt*7.3){
		if(!haveShow[5]) {
			reset();
			haveShow = true;
		}
		var dv = document.getElementById("tu7");
		setTimeout(seven(dv), 500);
	}else if(geth > cliHt * 7.0 && geth <= cliHt * 7.05) {
		reset();
		haveShow = false;
	}
	
	else if(geth > cliHt * 6.70 && geth <= cliHt*9.0){
		if(!haveShow[7]) {
			reset();
			haveShow = true;
		}
		var dv = document.getElementById("tu8");
		eight(dv);
		var zi = document.getElementById("zi8");
		setTimeout(night(zi), 500);
	}else if(geth > cliHt *9.0 && geth <= cliHt * 9.05) {
		reset();
		haveShow = false;
	}
	
};

function first(dv) {
	dv_left = 100;
	dv.style.left = dv_left + "px";
	dv.style.top = 400 + "ox";
	dv.style.opacity = 1;
}

function showText(zi) {
	zi_right = 150;
	zi.style.right = zi_right + "px";
	zi.style.top = 0 + "px";
	zi.style.opacity = 1;
}
function second(dv) {
	dv_left = 150;
	dv.style.left = dv_left + "px";
	dv.style.top = 0 + "px";
	dv.style.opacity = 1;
}
function third(dv){
	dv_left=100;
	dv.style.left =dv_left + "px";
	dv.style.top = 0 + "px";
	dv.style.opacity = 1;
}
function four(dv){
	dv_left = 110;
	dv.style.left = dv_left + "px";
	dv.style.top = 0 +"px";
	dv.style.opacity = 1;
}
function five(dv){
	dv_left=150;
	dv.style.left = dv_left + "px";
	dv.style.top = 0 + "px";
	dv.style.opacity = 1;
}
function six(dv){
	dv_left = 190;
	dv.style.left = dv_left + "px";
	dv.style.top = 0 +"px";
	dv.style.opacity = 1;
}
function seven(dv){
	dv_left = 70;
	dv.style.left = dv_left + "px";
	dv.style.top = 0 +"px";
	dv.style.opacity = 1;
	dv.style.position = "relative";
}
function eight(dv){
	dv_left = 900;
	dv.style.left = dv_left + "px";
	dv.style.top = 270 +"px";
	dv.style.opacity = 1;
}
function night(zi){
	zi_left = 180;
	zi.style.left = zi_left + "px";
	zi.style.top = 70 +"px";
	zi.style.opacity = 1;
}
function reset() {
	var dv = document.getElementById("tu1");
	dv.setAttribute("style", "top: 0;left: 0;opacity: 0;")
	var zi = document.getElementById("zi1");
	zi.setAttribute("style", "left:10;opacity: 0;");
	var dv1 = document.getElementById("first");
	dv1.setAttribute("style", "left: 0;opacity: 0;");
	var dv2 = document.getElementById("tu3");
	dv2.setAttribute("style","right: 0;opacity: 0;");
	var dv3 = document.getElementById("tu4");
	dv3.setAttribute("style","right: 20;opacity: 0;");
	var dv4 = document.getElementById("tu5");
	dv4.setAttribute("style","left: 0;opacity: 0;");
	var dv5 = document.getElementById("tu6");
	dv5.setAttribute("style","left: 0;opacity: 0;");
	var dv6 = document.getElementById("tu7");
	dv6.setAttribute("style","left: 0;opacity: 0;");
	var dv7 = document.getElementById("tu8");
	dv7.setAttribute("style","left: 770;opacity: 0;");
	var dv8 = document.getElementById("zi8");
	dv8.setAttribute("style","left: 10;opacity: 0;");
	
}
