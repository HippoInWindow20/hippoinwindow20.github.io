function changeColour(colour, button) {
    document.getElementById("bg").style.background = colour;
    var colourButtons = document.getElementsByClassName("preset");
    for (let i = 0; i < colourButtons.length; i++) {
        colourButtons[i].style.border = "3px solid #FFF";
    }
    try {
        button.style.border = "3px solid rgb(0, 162, 255)";
    } catch (e) {
        console.log("Custom")
    }
    if (document.getElementById("bg").style.background == "rgb(1, 1, 1)")
        showAlert("Never gonna give you up", "Never gonna let you down<br>Never gonna run around and", "desert you");
}

function changePreset(num) {
    document.getElementById("custom" + num).style.background = document.getElementById("picker" + num).value;
    document.getElementById("pre" + num).style.background = document.getElementById("picker" + num).value;
    document.getElementById("pre" + num).dataset.colour = document.getElementById("picker" + num).value;
}

document.getElementById("picker").addEventListener("change", function() { changeColour(this.value) });
document.getElementById("picker1").addEventListener("change", function() { changePreset(1) });
document.getElementById("picker2").addEventListener("change", function() { changePreset(2) });
document.getElementById("picker3").addEventListener("change", function() { changePreset(3) });
document.getElementById("picker4").addEventListener("change", function() { changePreset(4) });
document.getElementById("picker5").addEventListener("change", function() { changePreset(5) });

if (("standalone" in window.navigator) &&
    window.navigator.standalone) {
    document.getElementById("switch").style.display = "none";
}

var ua = navigator.userAgent.toLowerCase();
var env = {};
env.isIPhone = /iphone/.test(ua);
env.isIPad = /ipad/.test(ua);
env.isIOS = env.isIPhone || env.isIPad;
var yyyy = document.getElementsByClassName("picker");
var xxxx = document.getElementsByClassName("custom");
if (env.isIOS) {

    for (let k = 0; k < yyyy.length; k++) {
        yyyy[k].style.display = "block";
        xxxx[k].style.display = "none";
    }
    document.getElementById("custom").style.display = "none";
    if (navigator.standalone)
        document.getElementById("switch").style.display = "none";
} else {
    for (let m = 0; m < yyyy.length; m++) {
        yyyy[m].style.display = "none";
        xxxx[m].style.display = "block";
    }
}

function changeActive(button) {
    var x = document.getElementsByClassName("aaa");
    for (let j = 0; j < x.length; j++) {
        x[j].style.color = "black";
        try {
            document.getElementById(x[j].innerText).style.display = "none";
        } catch (e) {}
    }
    button.style.color = "#4C8BF5";
    document.getElementById(button.innerText).style.display = null;
}

var colourButtons = document.getElementsByClassName("preset");
for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].style.background = colourButtons[i].dataset.colour;
}

function info() {
    var colourOfChoice = document.getElementById("bg").style.background;
    showAlert("目前顏色", colourOfChoice, "關閉");
}

function switchState(property) {
    if (property.dataset.state == "on") {
        property.dataset.state = "off";
        property.src = "off.svg"
    } else {
        property.dataset.state = "on";
        property.src = "on.svg"
    }
}

function showAlert(title, content, closeText) {
    document.getElementById("popupTitle").innerHTML = title;
    document.getElementById("popupContent").innerHTML = content;
    document.getElementById("closeBtn").innerHTML = closeText;
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("popup").style.background = "rgba(0,0,0,0.4)";
    document.getElementById("innerPopup").style.transform = "scale(1)";
    parent.document.getElementsByTagName("meta")["theme-color"].content = "#999999";
}

function toggleFullscreen() {
    if (document.getElementById("bg").dataset.fullscreen == "false") {
        document.getElementById("bg").style.height = "126.75vw";
        document.getElementById("bg").childNodes[1].style.height = "126.75vw";
        document.getElementById("bg").style.width = "90vw";
        document.getElementById("bg").childNodes[1].style.width = "90vw";
        setTimeout(function() {
            document.getElementById("colourbox").style.display = "none";
        }, 100);
        document.getElementById("exitFullscreen").style.display = null;
        document.getElementById("goFullscreen").style.display = "none";
        document.getElementById("bg").dataset.fullscreen = "true";
    } else {
        document.getElementById("bg").style.height = "50vh";
        document.getElementById("bg").childNodes[1].style.height = "50vh";
        document.getElementById("bg").style.width = "35.5vh";
        document.getElementById("bg").childNodes[1].style.width = "35.5vh";
        document.getElementById("colourbox").style.display = null;
        document.getElementById("exitFullscreen").style.display = "none";
        document.getElementById("goFullscreen").style.display = null;
        document.getElementById("bg").dataset.fullscreen = "false";
    }
}

function closePopup() {
    document.getElementById('popup').style.visibility = 'hidden';
    parent.document.getElementsByTagName('meta')['theme-color'].content = '#FFF';
    document.getElementById('popup').style.background = 'rgba(0,0,0,0)';
    document.getElementById("innerPopup").style.transform = "scale(0)";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function saveData(showLog) {
    setCookie("set1", document.getElementById("picker1").value, 180);
    setCookie("set2", document.getElementById("picker2").value, 180);
    setCookie("set3", document.getElementById("picker3").value, 180);
    setCookie("set4", document.getElementById("picker4").value, 180);
    setCookie("set5", document.getElementById("picker5").value, 180);
    if (showLog)
        showAlert("已儲存變更", "", "關閉");
}

function restoreDefault() {
    document.getElementById("picker1").value = "#0C88A1";
    document.getElementById("picker2").value = "#E67070";
    document.getElementById("picker3").value = "#6AAD52";
    document.getElementById("picker4").value = "#F7C369";
    document.getElementById("picker5").value = "#7D77CA";
    updateAll();
    saveData();
}

function updateAll() {
    changePreset(1);
    changePreset(2);
    changePreset(3);
    changePreset(4);
    changePreset(5);
}

if (document.cookie.length !== 0) {
    document.getElementById("picker1").value = getCookie("set1");
    document.getElementById("picker2").value = getCookie("set2");
    document.getElementById("picker3").value = getCookie("set3");
    document.getElementById("picker4").value = getCookie("set4");
    document.getElementById("picker5").value = getCookie("set5");
    updateAll();
}