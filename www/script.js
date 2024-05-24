function zoom(posX, posY, zoomScale, contentID) {
    hideMenu();
    setTimeout(function() {
        let imgBG = document.getElementById("bg");
        imgBG.style.top = (50 - posY) + "%";
        imgBG.style.left = (50 - posX) + "%";
        imgBG.style.transform = "scale(" + zoomScale + "," + zoomScale + ")";
        imgBG.classList.add("blur");
        setTimeout(function() {
            let q = document.getElementById("mainDIV");
            q.style.display = null;
            $(q).fadeTo(500, 1);
            $("#homeBtn").fadeTo(500, 0.5);
        }, 600);
    }, 400);
    document.getElementById("mainFrame").src = "content/" + contentID + ".html";
}

function restoreZoom() {
    let q = document.getElementById("mainDIV");
    $(q).fadeTo(500, 0);
    $("#homeBtn").fadeTo(100, 0);
    setTimeout(function() {
        q.style.display = "none";
        document.getElementById("homeBtn").style.display = "none";
        let imgBG = document.getElementById("bg");
        imgBG.style.top = "0vh";
        imgBG.style.left = "0vw";
        imgBG.style.transform = "scale(1,1)";
        imgBG.classList.remove("blur");
        showMenu();
    }, 500);
}

function hideMenu() {
    let all = document.getElementsByClassName("menuItem");
    for (let i = 0; i < all.length; i++) {
        all[i].style.transform = "scale(0.01)";
    }
    setTimeout(function() {
        for (let i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
    }, 500);
}

function showMenu() {
    let all = document.getElementsByClassName("menuItem");
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = null;
        //$(all[i]).fadeTo(500, 1);
        setTimeout(function() {
            all[i].style.transform = "scale(1,1)";
        }, 1000);
    }
}

$(document).ready(function() {
    $(document.body).fadeTo(1000, 1);
    if (document.cookie.includes("visited=true") !== true) {
        firstTime();
        const d = new Date();
        d.setTime(d.getTime() + (60 * 24 * 60 * 60 * 1000));
        document.cookie = "visited=true; expires=" + d.toUTCString();
    } else {
        setTimeout(function() {
            removePrompt();
        }, 100);
    }
});



setInterval(function() {
    let elems = document.getElementsByClassName("mainPrompt");
    for (let i = 0; i < elems.length; i++) {
        let elemW = elems[i].getBoundingClientRect().width;
        let elemH = elems[i].getBoundingClientRect().height;
        elems[i].style.top = "calc(50vh - " + elemH / 2 + "px)";
        elems[i].style.left = "calc(50vw - " + elemW / 2 + "px)";
    }
}, 100);

function showPrompt(h1, h4, p, btnText) {
    let elem = document.getElementById("mainPrompt");
    elem.style.transform = "scale(1)";
    elem.style.display = "inline-block";
    setTimeout(function() {
        $(elem).fadeTo(300, 1);
    }, 400);
    document.getElementById("overlay").style.display = "inline-block";
    $("#overlay").fadeTo(500, 0.7);
    let promptText = "<h1>" + h1 + "</h1><h4>" + h4 + "</h4><p>" + p + "</p><button class='backButton' onclick='removePrompt()'>" + btnText + "</button>"
    elem.innerHTML = promptText;
}

function removePrompt() {
    let elem = document.getElementById("mainPrompt");
    elem.style.transform = "scale(0)";
    setTimeout(function() {
        elem.style.display = "none";
    }, 500);
    $(elem).fadeTo(300, 0);
    setTimeout(function() {
        document.getElementById("overlay").style.display = "none";
    }, 700);
    $("#overlay").fadeTo(300, 0);
    let elemsss = document.getElementsByClassName("menuItem");
    for (let i = 0; i < elemsss.length; i++) {
        elemsss[i].style.transform = "scale(1)";
    }
}

function firstTime() {
    showPrompt("<img src='favicon.png' style='height: 8vh;'/><br>歡迎蒞臨<br>一年六班班級網頁", "請使用<br><br><button class='menuItem' style='position: relative;transform: scale(1)' >像這樣的按鈕</button><br><br>瀏覽網頁", "本網站請使用電腦/平板橫向瀏覽<br>或手機直向瀏覽<br>並使用以下瀏覽器<br><img alt='Google Chrome' title='Google Chrome' src='chrome.svg' style='height: 8vh;'/><img src='edge.svg' alt='Microsoft Edge Chromium' title='Microsoft Edge Chromium' style='height: 8vh;'/><img alt='Apple iOS/macOS Safari' title='Apple iOS/macOS Safari' src='safari.svg' style='height: 8vh;'/><br>以獲取最佳體驗", "開始");
}

function showCounter() {
    showPrompt("網站拜訪次數", "<img src='https://hitwebcounter.com/counter/counter.php?page=7970423&style=0032&nbdigits=5&type=page&initCount=0' style='border: none;'/>", "", "關閉");
}