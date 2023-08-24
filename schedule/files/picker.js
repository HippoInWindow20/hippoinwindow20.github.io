var stds = [
				"1 ． 王OO",
				"2 ． 李OO",
				"3 ． 李OO",
				"4 ． 周OO",
				"5 ． 林OO",
				"6 ． 林OO",
				"7 ． 施OO",
				"8 ． 柳OO",
				"9 ． 許OO",
				"10 ． 陳OO",
				"11 ． 傅OO",
				"12 ． 曾OO",
				"13 ． 楊OO",
				"14 ． 楊OO",
				"15 ． 樊OO",
				"16 ． 賴OO",
				"17 ． 賴OO",
				"18 ． 王OO",
				"19 ． 江OO",
				"20 ． 吳OO",
				"21 ． 吳OO",
				"22 ． 沈OO",
				"23 ． 林OO",
				"24 ． 林OO",
				"25 ． 紀OO",
				"26 ． 徐O",
				"27 ． 張OO",
				"28 ． 許OO",
				"29 ． 許OO",
				"30 ． 陳OO",
				"31 ． 陳OO",
				"32 ． 陳OO",
				"33 ． 彭OO",
				"34 ． 黃OO",
				"35 ． 楊OO",
				"36 ． 楊OO",
				"37 ． 楊OO",
				"38 ． 楊OO",
				"39 ． 楊OO",
				"40 ． 董OO",
				"41 ． 鄒OO",
				"42 ． 劉OO",
				"43 ． 蔡OO",
				"44 ． 蔣OO",
				"45 ． 謝OO" ];
function pickone() {
	var random1 = Math.floor((Math.random() * 44) + 0);
	var targetstd = stds[random1];
	document.getElementById("stdresult1").innerHTML = targetstd;
	document.getElementById("stdresult2").innerHTML = "";
	document.getElementById("stdresult3").innerHTML = "";
	$("#picker").slideUp(500);
	$("#pickerresults").slideDown(700);
}

function picktwo() {
	var random01 = Math.floor((Math.random() * 45) + 0);
	var random02 = Math.floor((Math.random() * 44) + 0);
	var targetstd1 = stds[random01];
	var targetstd2 = stds[random02];
	if (targetstd1 == targetstd2) {
		picktwo();
	} else {
	document.getElementById("stdresult1").innerHTML = targetstd1;
	document.getElementById("stdresult2").innerHTML = targetstd2;
	document.getElementById("stdresult3").innerHTML = "";
	$("#picker").slideUp(500);
	$("#pickerresults").slideDown(700);
	}
}
function pickthree() {
	var random01 = Math.floor((Math.random() * 44) + 0);
	var random02 = Math.floor((Math.random() * 44) + 0);
	var random03 = Math.floor((Math.random() * 44) + 0);
	var targetstd1 = stds[random01];
	var targetstd2 = stds[random02];
	var targetstd3 = stds[random03];
	if (targetstd1 == targetstd2 || targetstd2 == targetstd3  || targetstd1 == targetstd3) {
		pickthree();
	}else {
	document.getElementById("stdresult1").innerHTML = targetstd1;
	document.getElementById("stdresult2").innerHTML = targetstd2;
	document.getElementById("stdresult3").innerHTML = targetstd3;
	$("#picker").slideUp(500);
	$("#pickerresults").slideDown(700);
	}
}

function pickcustom(){
	var randomnum = Math.floor((Math.random() * 45) + 1);
	var operate = document.getElementById("mathcalc").value;
	var offset = document.getElementById("valuefor").value;
	if (offset) {
		if (offset !== "0") {
		var offset = document.getElementById("valuefor").value;
	
	
	if (operate == "plus") {
		var offsetnum = parseInt(randomnum) + parseInt(offset);
		var calcline = randomnum + " + " + offset;
	} else if (operate == "minus") {
		var offsetnum = parseInt(randomnum) - parseInt(offset);
		var calcline = randomnum + " - " + offset;
	} else if (operate == "times") {
		var offsetnum = parseInt(randomnum) * parseInt(offset);
		var calcline = randomnum + " * " + offset;
	} else if (operate == "divide"){
		var offsetnum = parseInt(randomnum) / parseInt(offset);
		var offsetnum = Math.ceil(offsetnum);
		var calcline = randomnum + " / " + offset;
	} else{
		alert("Error!");
	}
	if (offsetnum > 45) {
		var timesnum = offsetnum / 45;
		var newtimes = Math.floor(timesnum);
		var offsetnum = offsetnum - (45 * newtimes);
		var calcline = "(" + calcline + ") - " + newtimes + " * 45";
	} else{
		var offsetnum = offsetnum; //I don't care
	}
	
	if (offsetnum < 0) {
		var reverseoffset = offsetnum - (offsetnum * 2);
		var timesnum = reverseoffset / 45;
		var newtimes = Math.ceil(timesnum);
		var offsetnum = (45 * newtimes) - reverseoffset;
		var calcline = "- (" + calcline + ") - " + newtimes + " * 45";
	} else{
		var offsetnum = offsetnum; //I don't care
		var calcline = calcline;		
	}
	/*if (offsetnum < 0) {
		var offsetnum = 45 + offsetnum;
		var calcline = "45 + (" + calcline + ")";
	} else{
		var offsetnum = offsetnum; //I don't care
		var calcline = calcline;		
	}*/
	var targetstdcus = stds[offsetnum - 1];
	document.getElementById("stdresult1").innerHTML = calcline;
	document.getElementById("stdresult2").innerHTML = targetstdcus;
	var problem = document.getElementById("stdresult2").innerHTML;
	if (problem == "undefined") {
		document.getElementById("stdresult2").innerHTML = "=0，沒有這一位，請老師回答";
	}
	document.getElementById("stdresult3").innerHTML = "";
	document.getElementById("valuefor").value = "";
	$("#picker").slideUp(500);
	$("#pickerresults").slideDown(700);
		} else {
			alert("數值不得為0");
		}
	} else{
		alert("請輸入數值");
		
	}
}
	
	



function pickfromdate(){
	var randomnum = new Date();
	var randomnum = randomnum.getDate();
	var operate = document.getElementById("datealg").value;
	var offset = new Date();
	var offset = offset.getMonth();
	var offset = offset + 1;
	
	if (operate == "plus") {
		var offsetnum = parseInt(randomnum) + parseInt(offset);
		var calcline = randomnum + " + " + offset;
	} else if (operate == "minus") {
		var offsetnum = parseInt(randomnum) - parseInt(offset);
		var calcline = randomnum + " - " + offset;
	} else if (operate == "times") {
		var offsetnum = parseInt(randomnum) * parseInt(offset);
		var calcline = randomnum + " * " + offset;
	} else if (operate == "divide"){
		var offsetnum = parseInt(randomnum) / parseInt(offset);
		var offsetnum = Math.ceil(offsetnum);
		var calcline = randomnum + " / " + offset;
	} else{
		alert("Error!");
	}
	if (offsetnum > 45) {
		var timesnum = offsetnum / 45;
		var newtimes = Math.floor(timesnum);
		var offsetnum = offsetnum - (45 * newtimes);
		var calcline = "(" + calcline + ") - " + newtimes + " * 45";
	} else{
		var offsetnum = offsetnum; //I don't care
	}
	
	if (offsetnum < 0) {
		var offsetnum = 45 + offsetnum;
		var calcline = "45 + (" + calcline + ")";
	} else{
		var offsetnum = offsetnum; //I don't care
		var calcline = calcline;		
	}
	var targetstdcus = stds[offsetnum  - 1];
	document.getElementById("stdresult1").innerHTML = calcline;
	document.getElementById("stdresult2").innerHTML = targetstdcus;
	var problem = document.getElementById("stdresult2").innerHTML;
	if (problem == "undefined") {
		document.getElementById("stdresult2").innerHTML = "=0，沒有這一位，請老師回答";
	}
	document.getElementById("stdresult3").innerHTML = "";
	$("#picker").slideUp(500);
	$("#pickerresults").slideDown(700);
}

function goback() {
	$("#pickerresults").slideUp(500);
	$("#picker").slideDown(700);
}