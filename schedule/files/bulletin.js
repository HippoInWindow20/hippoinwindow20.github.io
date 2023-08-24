//Bulletin Board Controls

function upload() {
	var txttoload = document.getElementById("targetfile").files[0];
	var fileread = new FileReader();
	fileread.onload = function(fileLoadedEvent) {
		var targettxt = fileLoadedEvent.target.result;
		var arytxt = targettxt.split(",");
		var line1txt = arytxt[0];
		var line2txt = arytxt[1];
		var line3txt = arytxt[2];
		var line4txt = arytxt[3];
		if (line1txt){
			document.getElementById("line1").innerHTML = line1txt;
		} else {
			document.getElementById("line1").innerHTML = "";
		}
		if (line2txt){
			document.getElementById("line2").innerHTML = line2txt;
		} else {
			document.getElementById("line2").innerHTML = "";
		}
		if (line3txt){
			document.getElementById("line3").innerHTML = line3txt;
		} else {
			document.getElementById("line3").innerHTML = "";
		}
		if (line4txt){
			document.getElementById("line4").innerHTML = line4txt;
		} else {
			document.getElementById("line4").innerHTML = "";
		}
		
	}
	fileread.readAsText(txttoload, "UTF-8");
}

function hideupload() {
	$("#fileupload").slideUp();
	$("#fileshow").slideDown();
	retract();
}

function showupload() {
	$("#fileupload").slideDown();
	$("#fileshow").slideUp();
}
function restore() {
	document.getElementById("line1").innerHTML = "布告欄 (.txt檔案)";
	document.getElementById("line2").innerHTML = "欲布告項目最多4行";
	document.getElementById("line3").innerHTML = "換行請以 , 分隔，";
	document.getElementById("line4").innerHTML = "不用Enter。";
}