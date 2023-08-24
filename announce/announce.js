var txt = [];
var img = [];
var innerFrame = parent;
//setInterval (refreshAnnounce, 3000);
setTimeout(refreshAnnounce, 1000);

function refreshAnnounce() {
    if (txt.length !== 0 || img.length !== 0) {
        innerFrame.document.getElementById("bottomLink3Idontcare").src = "images/urgent.png";
        document.getElementById("announcenew").style.color = "#FFA136";
        innerFrame.document.getElementById("announce").innerHTML = "";
    }
    if (txt.length !== 0) {
        for (var k = 0; k < txt.length; k++) {
            innerFrame.document.getElementById("announce").innerHTML += txt[k] + "<br><br>";
        }
    }
    if (img.length !== 0) {
        for (var k = 0; k < img.length; k++) {
            innerFrame.document.getElementById("announce").innerHTML += "<img src='http://student.yphs.tp.edu.tw/~za10755143/announce/" + img[k] + "' style='width: 100%;'><br>";
        }
    }
}