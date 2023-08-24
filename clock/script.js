function digitized() {
    var dt = new Date();
    var hrs = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    if (hrs < 10)
        var hrs = "0" + hrs;
    if (min < 10)
        var min = "0" + min;
    if (sec < 10)
        var sec = "0" + sec;
    document.getElementById('dc').innerHTML = hrs + ":" + min + ":" + sec;
}

setInterval("digitized()", 1000);

function change(input) {
    if (input.length == 0) {
        document.getElementById('emojit').innerHTML = document.getElementById('username').value;
        var titleValue = document.getElementById('username').value;
        if (titleValue)
            document.getElementById('spaceholder').style.display = "none";
        else
            document.getElementById('spaceholder').style.display = "block";
    } else {
        document.getElementById('emojit').innerHTML = input;
        var titleValue = document.getElementById('username').value;
        if (titleValue)
            document.getElementById('spaceholder').style.display = "none";
        else
            document.getElementById('spaceholder').style.display = "block";
    }
}

function hide() {
    $("#emojifield").slideUp();
    document.body.style.overflow = "hidden";
    scroll(0, 0);
}

/*function showpanel() {
    $("#emojifield").slideDown();
    document.body.style.overflow = null;
}*/

function goFullScreen() {
    var el = document.documentElement,
        rfs = // for newer Webkit and Firefox
        el.requestFullscreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullscreen;
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    } else if (typeof window.ActiveXObject != "undefined") {
        // for Internet Explorer
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function exitFullScreen() {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        if (!document.mozFullScreen && !document.webkitFullScreen) {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.mozRequestFullScreen) {
                container.mozRequestFullScreen();
            } else if (container.webkitRequestFullScreen) {
                container.webkitRequestFullScreen();
            } else if (container.msRequestFullscreen) {
                container.msRequestFullscreen();
            }
        }
    }
}

function showpanel() {
	var consent = confirm("重設標題？");
	if (consent)
		change("點選標題直接編輯<br>取消選取儲存變更");
    // document.getElementById("saveContents").style.display = "inline-block";
}

function saveContents() {
    const d = new Date();
    d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
    let expires = ";expires=" + d.toUTCString();
    document.cookie = "title=" + document.getElementById("emojit").innerHTML + expires + ";path=/";
    document.getElementById("saveContents").style.display = "none";
    goFullScreen();
}

if (document.cookie) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    let titlecontent = ca[0].split('=')[1];
    document.getElementById("emojit").innerHTML = titlecontent;
}

function microEdit() {
    // document.getElementById("saveContents").style.display = "inline-block";
    exitFullScreen();
}

function setCookie(cname, cvalue) {
    // const d = new Date();
    // d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
    // let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}