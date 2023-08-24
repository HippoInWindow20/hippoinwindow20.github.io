var imgs = ["frustrated.png", "nosalt.png", "o.png", "inhale.png", "huh.png", "chaos.png", "confused.png", "ah.png"];
var alttexts = ["She's frustrated.", "笑不出來.", "(???)", "(吸氣)", "蛤？", "呃", "(confused)", "齁喔喔喔~~~!!!!"];

function getPhoto() {
    var num = Math.floor(Math.random() * (imgs.length - 0)) + 0;
    document.getElementById("myIMG").src = imgs[num];
    document.getElementById("myIMG").style.display = "inline-block";
    document.getElementById("prompt").style.display = "none";
    document.getElementById("alttext").innerHTML = alttexts[num];
    setInterval(function() {
        if (screen.availWidth > screen.availHeight) {
            document.getElementById("myIMG").style.height = "87vh";
            document.getElementById("myIMG").style.width = "auto";
        } else {
            document.getElementById("myIMG").style.width = "90vw";
            document.getElementById("myIMG").style.height = "auto";
        }
    }, 10);
}