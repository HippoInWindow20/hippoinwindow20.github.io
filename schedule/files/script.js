setInterval(function(){


if (new Date().getHours() < 10) {
	if (new Date().getMinutes() < 10) {
		var timenow = "0" + new Date().getHours() + ":0" + new Date().getMinutes();
	}
	else{
		var timenow = "0" + new Date().getHours() + ":" + new Date().getMinutes();
	}
} 
else{
	if (new Date().getMinutes() < 10) {
		var timenow = new Date().getHours() + ":0" + new Date().getMinutes();
	}
	else{
		var timenow = new Date().getHours() + ":" + new Date().getMinutes();
	}
}
 document.getElementById("realtime").innerHTML = timenow;
 
var aaaa=new Date().getDay();

var daycode = ["sun","mon", "tue", "wed", "thu", "fri", "sat"];
var daytrans = daycode[aaaa];
 
if (daytrans == "mon"){
	if (new Date().getHours() == 7){
	    document.getElementById("timer").innerHTML = "08:00~08:50";
		document.getElementById("subject").innerHTML = "下一節";
		document.getElementById("upnext").innerHTML = "：英文";
		document.getElementById("upnext").style.color = "#FFE989";
		document.getElementById("upnext").style.opacity = "1";
		
		
	}
	else if (new Date().getHours() == 8){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "08:00~08:50";
			document.getElementById("subject").innerHTML = "英文→";
			document.getElementById("upnext").innerHTML = "→歷史";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		
		    document.getElementById("timer").innerHTML = "09:00~09:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：歷史";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 9){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "09:00~09:50";
			document.getElementById("subject").innerHTML = "歷史→";
			document.getElementById("upnext").innerHTML = "→資訊";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "10:00~10:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：資訊";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 10){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "10:00~10:50";
			document.getElementById("subject").innerHTML = "資訊→";
			document.getElementById("upnext").innerHTML = "→資訊";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "11:00~11:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：資訊";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 11){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "11:00~11:50";
			document.getElementById("subject").innerHTML = "資訊→";
			document.getElementById("upnext").innerHTML = "→物理";
			document.getElementById("upnext").style.opacity = "0.5";
			
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：物理";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 12){
	        document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：物理";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
	}
	else if (new Date().getHours() == 13){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "物理→";
			document.getElementById("upnext").innerHTML = "→化學";
			document.getElementById("upnext").style.opacity = "0.5";
			
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "14:00~14:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：化學";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 14){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "14:00~14:50";
			document.getElementById("subject").innerHTML = "化學→";
			document.getElementById("upnext").innerHTML = "→數學";
			document.getElementById("upnext").style.opacity = "0.5";
			
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "15:00~15:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：數學";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 15){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "15:00~15:50";
			document.getElementById("subject").innerHTML = "數學→";
			document.getElementById("upnext").innerHTML = "→生物";
			document.getElementById("upnext").style.opacity = "0.5";
			
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "16:00~16:45";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：生物";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 16){
		if (new Date().getMinutes() < 45){
		    document.getElementById("timer").innerHTML = "16:00~16:45";
			document.getElementById("subject").innerHTML = "生物→";
			document.getElementById("upnext").innerHTML = "→國文";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else if (new Date().getMinutes() >= 45 && new Date().getMinutes() < 55) {
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：國文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
		else {
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "國";
			document.getElementById("upnext").innerHTML = "文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
	}
	else if (new Date().getHours() == 17){
		if (new Date().getMinutes() < 40){
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "國";
			document.getElementById("upnext").innerHTML = "文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
		else {
		    document.getElementById("timer").innerHTML = timenow;
			document.getElementById("subject").innerHTML = "非上課";
			document.getElementById("upnext").innerHTML = "時間~";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}	
	}
	else {
	    document.getElementById("timer").innerHTML = timenow;
		document.getElementById("subject").innerHTML = "非上課";
		document.getElementById("upnext").innerHTML = "時間~";
		document.getElementById("upnext").style.color = "#FFE989";
		document.getElementById("upnext").style.opacity = "1";
			
			
	}	
}

else if (daytrans == "tue"){
if (new Date().getHours() == 7){
        document.getElementById("timer").innerHTML = "08:00~08:50";
		document.getElementById("subject").innerHTML = "下一節";
		document.getElementById("upnext").innerHTML = "：地科";
		document.getElementById("upnext").style.color = "#FFE989";
		document.getElementById("upnext").style.opacity = "1";
		
		
	}
	else if (new Date().getHours() == 8){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "08:00~08:50";
			document.getElementById("subject").innerHTML = "地科→";
			document.getElementById("upnext").innerHTML = "→英文";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "09:00~09:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：英文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 9){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "09:00~09:50";
			document.getElementById("subject").innerHTML = "英文→";
			document.getElementById("upnext").innerHTML = "→英文";
			document.getElementById("upnext").style.opacity = "0.5";
			
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "10:00~10:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：英文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 10){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "10:00~10:50";
			document.getElementById("subject").innerHTML = "英文→";
			document.getElementById("upnext").innerHTML = "→地理";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "11:00~11:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：地理";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 11){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "11:00~11:50";
			document.getElementById("subject").innerHTML = "地理→";
			document.getElementById("upnext").innerHTML = "→歷史";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：歷史";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 12){
	        document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：歷史";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
	}
	else if (new Date().getHours() == 13){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "歷史→";
			document.getElementById("upnext").innerHTML = "→國文";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "14:00~14:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：國文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 14){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "14:00~14:50";
			document.getElementById("subject").innerHTML = "國文→";
			document.getElementById("upnext").innerHTML = "→公民";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "15:00~15:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：公民";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 15){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "15:00~15:50";
			document.getElementById("subject").innerHTML = "公民→";
			document.getElementById("upnext").innerHTML = "→數學";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "16:00~16:45";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：數學";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 16){
		if (new Date().getMinutes() < 45){
		    document.getElementById("timer").innerHTML = "16:00~16:45";
			document.getElementById("subject").innerHTML = "數學→";
			document.getElementById("upnext").innerHTML = "→數學";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else if (new Date().getMinutes() >= 45 && new Date().getMinutes() < 55) {
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：數學";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
		else {
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "數";
			document.getElementById("upnext").innerHTML = "學";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
	}
	else if (new Date().getHours() == 17){
		if (new Date().getMinutes() < 40){
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "數";
			document.getElementById("upnext").innerHTML = "學";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
		else {
		    document.getElementById("timer").innerHTML = timenow;
			document.getElementById("subject").innerHTML = "非上課";
			document.getElementById("upnext").innerHTML = "時間~";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}	
	}
	else {
	    document.getElementById("timer").innerHTML = timenow;
		document.getElementById("subject").innerHTML = "非上課";
		document.getElementById("upnext").innerHTML = "時間~";
		document.getElementById("upnext").style.color = "#FFE989";
		document.getElementById("upnext").style.opacity = "1";
		
		
	}
}
else if (daytrans == "wed"){
if (new Date().getHours() == 7){
		document.getElementById("timer").innerHTML = "08:00~08:50";
		document.getElementById("subject").innerHTML = "下一節";
		document.getElementById("upnext").innerHTML = "：數學";
		document.getElementById("upnext").style.color = "#FFE989";
		document.getElementById("upnext").style.opacity = "1";
		
		
	}
	else if (new Date().getHours() == 8){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "08:00~08:50";
			document.getElementById("subject").innerHTML = "數學→";
			document.getElementById("upnext").innerHTML = "→地科";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "09:00~09:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：地科";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 9){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "09:00~09:50";
			document.getElementById("subject").innerHTML = "地科→";
			document.getElementById("upnext").innerHTML = "→英文";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "10:00~10:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：英文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
		}
	}
	else if (new Date().getHours() == 10){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "10:00~10:50";
			document.getElementById("subject").innerHTML = "英文→";
			document.getElementById("upnext").innerHTML = "→物理";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "11:00~11:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：物理";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 11){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "11:00~11:50";
			document.getElementById("subject").innerHTML = "物理→";
			document.getElementById("upnext").innerHTML = "→國文";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：國文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 12){
			document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：國文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
	}
	else if (new Date().getHours() == 13){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "國文→";
			document.getElementById("upnext").innerHTML = "→國文";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "14:00~14:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：國文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 14){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "14:00~14:50";
			document.getElementById("subject").innerHTML = "國文→";
			document.getElementById("upnext").innerHTML = "→公民";
			document.getElementById("upnext").style.opacity = "0.5";
			
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "15:00~15:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：公民";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 15){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "15:00~15:50";
			document.getElementById("subject").innerHTML = "公民→";
			document.getElementById("upnext").innerHTML = "→化學";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "16:00~16:45";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：化學";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 16){
		if (new Date().getMinutes() < 45){
		    document.getElementById("timer").innerHTML = "16:00~16:45";
			document.getElementById("subject").innerHTML = "化學→";
			document.getElementById("upnext").innerHTML = "→體育";
			document.getElementById("subject").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else if (new Date().getMinutes() >= 45 && new Date().getMinutes() < 55){
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：體育";
			document.getElementById("subject").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1.0";
			document.getElementById("upnext").style.color = "#FFE989";
		}
		else {
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "體";
			document.getElementById("upnext").innerHTML = "育";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
	}
	else if (new Date().getHours() == 17){
		if (new Date().getMinutes() < 40){
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "體";
			document.getElementById("upnext").innerHTML = "育";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
		else {
		    document.getElementById("timer").innerHTML = timenow;
			document.getElementById("subject").innerHTML = "非上課";
			document.getElementById("upnext").innerHTML = "時間~";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}	
	}
	else {
	    document.getElementById("timer").innerHTML = timenow;
		document.getElementById("subject").innerHTML = "非上課";
		document.getElementById("upnext").innerHTML = "時間~";
		document.getElementById("upnext").style.color = "#FFE989";
		document.getElementById("upnext").style.opacity = "1";
		
		
	}
}
else if (daytrans == "thu"){
if (new Date().getHours() == 7){
		document.getElementById("timer").innerHTML = "08:00~08:50";
		document.getElementById("subject").innerHTML = "下一節";
		document.getElementById("upnext").innerHTML = "：數學";
		document.getElementById("upnext").style.color = "#FFE989";
		document.getElementById("upnext").style.opacity = "1";
	}
	else if (new Date().getHours() == 8){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "08:00~08:50";
			document.getElementById("subject").innerHTML = "數學→";
			document.getElementById("upnext").innerHTML = "→英會";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "09:00~09:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：英會";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
	}
	else if (new Date().getHours() == 9){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "09:00~09:50";
			document.getElementById("subject").innerHTML = "英會→";
			document.getElementById("upnext").innerHTML = "→化學";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "10:00~10:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：化學";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 10){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "10:00~10:50";
			document.getElementById("subject").innerHTML = "化學→";
			document.getElementById("upnext").innerHTML = "→國文";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "11:00~11:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：國文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 11){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "11:00~11:50";
			document.getElementById("subject").innerHTML = "國文→";
			document.getElementById("upnext").innerHTML = "→地理";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：地理";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
	}
	else if (new Date().getHours() == 12){
			document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：地理";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
	}
	else if (new Date().getHours() == 13){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "地理→";
			document.getElementById("upnext").innerHTML = "→空白";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "14:00~14:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：空白";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
	}
	else if (new Date().getHours() == 14){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "14:00~14:50";
			document.getElementById("subject").innerHTML = "空白→";
			document.getElementById("upnext").innerHTML = "→探索";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "15:00~15:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：探索";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 15){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "15:00~15:50";
			document.getElementById("subject").innerHTML = "探索→";
			document.getElementById("upnext").innerHTML = "→探索";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "16:00~16:45";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：探索";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 16){
		if (new Date().getMinutes() < 45){
		    document.getElementById("timer").innerHTML = "16:00~16:45";
			document.getElementById("subject").innerHTML = "探索→";
			document.getElementById("upnext").innerHTML = "→英文";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else if (new Date().getMinutes() >= 45 && new Date().getMinutes() < 55){
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：英文";
			document.getElementById("upnext").style.opacity = "1";
			document.getElementById("upnext").style.color = "#FFE989";
		}
		else {
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "英";
			document.getElementById("upnext").innerHTML = "文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
	}
	else if (new Date().getHours() == 17){
		if (new Date().getMinutes() < 40){
		    document.getElementById("timer").innerHTML = "16:55~17:40";
			document.getElementById("subject").innerHTML = "英";
			document.getElementById("upnext").innerHTML = "文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
		else {
		    document.getElementById("timer").innerHTML = timenow;
			document.getElementById("subject").innerHTML = "非上課";
			document.getElementById("upnext").innerHTML = "時間~";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
		}	
	}
	else {
	    document.getElementById("timer").innerHTML = timenow;
		document.getElementById("subject").innerHTML = "非上課";
		document.getElementById("upnext").innerHTML = "時間~";
		document.getElementById("upnext").style.color = "#FFE989";
		document.getElementById("upnext").style.opacity = "1";
		
	}
}
else if (daytrans == "fri"){
if (new Date().getHours() == 7){
		document.getElementById("timer").innerHTML = "08:00~08:50";
		document.getElementById("subject").innerHTML = "下一節";
		document.getElementById("upnext").innerHTML = "：生物";
		document.getElementById("upnext").style.color = "#FFE989";
		document.getElementById("upnext").style.opacity = "1";
	}
	else if (new Date().getHours() == 8){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "08:00~08:50";
			document.getElementById("subject").innerHTML = "生物→";
			document.getElementById("upnext").innerHTML = "→數學";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "09:00~09:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：數學";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 9){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "09:00~09:50";
			document.getElementById("subject").innerHTML = "數學→";
			document.getElementById("upnext").innerHTML = "→物理";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "10:00~10:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：物理";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
		}
	}
	else if (new Date().getHours() == 10){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "10:00~10:50";
			document.getElementById("subject").innerHTML = "物理→";
			document.getElementById("upnext").innerHTML = "→國文";
			
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "11:00~11:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：國文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 11){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "11:00~11:50";
			document.getElementById("subject").innerHTML = "國文→";
			document.getElementById("upnext").innerHTML = "→空白";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：空白";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
	}
	else if (new Date().getHours() == 12){
	    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：空白";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
	}
	else if (new Date().getHours() == 13){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "13:00~13:50";
			document.getElementById("subject").innerHTML = "空白→";
			document.getElementById("upnext").innerHTML = "→班會";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "14:00~14:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：班會";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 14){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "14:00~14:50";
			document.getElementById("subject").innerHTML = "班會→";
			document.getElementById("upnext").innerHTML = "→體育";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "15:00~15:50";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：體育";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 15){
		if (new Date().getMinutes() < 50){
		    document.getElementById("timer").innerHTML = "15:00~15:50";
			document.getElementById("subject").innerHTML = "體育→";
			document.getElementById("upnext").innerHTML = "→英文";
			document.getElementById("upnext").style.opacity = "0.5";
			document.getElementById("upnext").style.color = "white";
		}
		else {
		    document.getElementById("timer").innerHTML = "16:00~16:45";
			document.getElementById("subject").innerHTML = "下一節";
			document.getElementById("upnext").innerHTML = "：英文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
			
		}
	}
	else if (new Date().getHours() == 16){
		if (new Date().getMinutes() < 45){
		    document.getElementById("timer").innerHTML = "16:00~16:45";
			document.getElementById("subject").innerHTML = "英";
			document.getElementById("upnext").innerHTML = "文";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
		}
		else {
		    document.getElementById("timer").innerHTML = timenow;
			document.getElementById("subject").innerHTML = "非上課";
			document.getElementById("upnext").innerHTML = "時間~";
			document.getElementById("upnext").style.color = "#FFE989";
			document.getElementById("upnext").style.opacity = "1";
			
		}
	}
	else {
	    document.getElementById("timer").innerHTML = timenow;
		document.getElementById("subject").innerHTML = "非上課";
		document.getElementById("upnext").innerHTML = "時間~";
		document.getElementById("upnext").style.color = "#FFE989";
		document.getElementById("upnext").style.opacity = "1";
		
		
	}
}
else{
    document.getElementById("timer").innerHTML = timenow;
    document.getElementById("subject").innerHTML = "非上課";
	document.getElementById("upnext").innerHTML = "時間~";
	document.getElementById("upnext").style.color = "#FFE989";
	document.getElementById("upnext").style.opacity = "1";
	
}
}, 6000);

//Button Functions
function loadimg() {
    $("#classtime").fadeOut();
	$("#aboutver").fadeOut();
	$("#closeins").fadeOut();
	$("#picker").fadeOut();
	$("#sportslink").fadeOut();
	$("#pickerresults").fadeOut();
	$("#board").fadeOut();
    $("#classimg").delay(700).fadeIn();
   
}

function timeclass() {
    $("#classimg").fadeOut();
	$("#aboutver").fadeOut();
	$("#closeins").fadeOut();
	$("#picker").fadeOut();
	$("#sportslink").fadeOut();
	$("#pickerresults").fadeOut();
	$("#board").fadeOut();
    $("#classtime").delay(700).fadeIn();
}

function about() {
    $("#classtime").fadeOut();
    $("#classimg").fadeOut();
	$("#closeins").fadeOut();
	$("#picker").fadeOut();
	$("#pickerresults").fadeOut();
	$("#sportslink").fadeOut();
	$("#board").fadeOut();
	$("#aboutver").delay(700).fadeIn();
}

function linking() {
    $("#classtime").fadeOut();
    $("#classimg").fadeOut();
	$("#closeins").fadeOut();
	$("#picker").fadeOut();
	$("#pickerresults").fadeOut();
	$("#aboutver").fadeOut();
	$("#board").fadeOut();
	$("#sportslink").delay(700).fadeIn();
}

function closenow() {
	$("#classtime").fadeOut();
    $("#classimg").fadeOut();
	$("#sportslink").fadeOut();
	$("#picker").fadeOut();
	$("#pickerresults").fadeOut();
	$("#aboutver").fadeOut();
	$("#board").fadeOut();
	$("#closeins").delay(700).fadeIn();
	
}

function pickperson() {
	$("#classtime").fadeOut();
    $("#classimg").fadeOut();
	$("#sportslink").fadeOut();
	$("#closeins").fadeOut();
	$("#pickerresults").fadeOut();
	$("#aboutver").fadeOut();
	$("#board").fadeOut();
	$("#picker").delay(700).fadeIn();

}

//Change Image Slideshow
jQuery(document).ready(function() {
	
    $.backstretch([
                    "files/1.jpg"
	              , "files/2.jpg"
	              , "files/3.jpg"
	              , "files/4.jpg"
				  , "files/5.jpg"
				  , "files/6.jpg"
				  , "files/7.jpg"
				 ], {duration: 20000, fade: 500});     
}
);

function retract() {
		$("#select").slideUp();
		$("#dropdown").slideDown();
}

function detract() {
	$("#dropdown").slideUp();
	$("#select").slideDown();
}

function bulletin() {
	$("#classtime").fadeOut();
    $("#classimg").fadeOut();
	$("#sportslink").fadeOut();
	$("#closeins").fadeOut();
	$("#pickerresults").fadeOut();
	$("#aboutver").fadeOut();
	$("#picker").fadeOut();
	$("#board").delay(700).fadeIn();
}

function switchtime() {
	$("#timer").slideUp();
	$("#realtime").slideDown();
}

function switchtimer() {
	$("#realtime").slideUp();
	$("#timer").slideDown();
}