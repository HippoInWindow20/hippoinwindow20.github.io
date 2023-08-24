const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const fileDate = urlParams.get('date')

function fetchData(fileDate, index) {
    // document.getElementById("overlay").style.display = "block";
    // document.body.style.overflow = "hidden";
    document.body.style.opacity = "0.4";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
            // console.log(xmlDoc.getElementsByTagName("notice")[index].childNodes);
            document.getElementById("title").innerHTML = xmlDoc.getElementsByTagName("doc")[0].getElementsByTagName("notice")[index].childNodes[1].innerHTML;
            document.getElementById("date").innerHTML = xmlDoc.getElementsByTagName("doc")[0].getElementsByTagName("notice")[index].childNodes[3].innerHTML;
            document.getElementById("author").innerHTML = xmlDoc.getElementsByTagName("doc")[0].getElementsByTagName("notice")[index].childNodes[5].innerHTML;
            document.getElementById("authority").innerHTML = xmlDoc.getElementsByTagName("doc")[0].getElementsByTagName("notice")[index].childNodes[7].innerHTML;
            var descText = xmlDoc.getElementsByTagName("doc")[0].getElementsByTagName("notice")[index].childNodes[9].childNodes;
            document.getElementById("desc").innerHTML = "";
            descText.forEach(element => {
                if (element.innerHTML !== undefined)
                    document.getElementById("desc").innerHTML += "<h4>" + element.innerHTML + "</h4>";
            });
            document.getElementById("link").href = xmlDoc.getElementsByTagName("doc")[0].getElementsByTagName("notice")[index].childNodes[11].innerHTML;
            if (xmlDoc.getElementsByTagName("doc")[0].getElementsByTagName("notice")[index].childNodes[11].innerHTML.length !== 0) {
                document.getElementById("link").style.display = "block";
            } else {
                document.getElementById("link").style.display = "none";
            }
            // document.getElementById("overlay").style.display = "none";
            // document.body.style.overflow = "auto";
            document.body.style.opacity = "1";
        }
    };
    xhttp.open("GET", fileDate + ".xml", true);
    xhttp.send();
}

var minIndex = 0;
var maxIndex;
var currentIndex = 0;

function checkIndex() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
            maxIndex = xmlDoc.getElementsByTagName("doc")[0].getElementsByTagName("notice").length - 1;
        }
    };
    xhttp.open("GET", fileDate + ".xml", true);
    xhttp.send();
}

function navigate(direction) {
    if (maxIndex !== 0) {
        if (direction == "pre") {
            if (currentIndex <= minIndex) {
                fetchData(fileDate, currentIndex);
                disableButton("left");
            } else if (currentIndex > minIndex && currentIndex <= maxIndex) {
                currentIndex = currentIndex - 1;
                fetchData(fileDate, currentIndex);
                disableButton("none");

            }
        } else if (direction == "next") {
            if (currentIndex >= maxIndex) {
                fetchData(fileDate, currentIndex);
                disableButton("right");
            } else if (currentIndex >= minIndex && currentIndex < maxIndex) {
                currentIndex = currentIndex + 1;
                fetchData(fileDate, currentIndex);
                disableButton("none");
            }
        } else {
            alert("Invalid operation");
        }

        //Final check
        if (currentIndex <= minIndex)
            disableButton("left")
        else if (currentIndex >= maxIndex)
            disableButton("right")
    } else {
        fetchData(fileDate, currentIndex);
        disableButton("both");
    }
}

function disableButton(btn) {
    if (btn == "left") {
        document.getElementById("previous").disabled = true;
        document.getElementById("next").disabled = false;
    } else if (btn == "right") {
        document.getElementById("previous").disabled = false;
        document.getElementById("next").disabled = true;
    } else if (btn == "both") {
        document.getElementById("previous").disabled = true;
        document.getElementById("next").disabled = true;
    } else if (btn == "none") {
        document.getElementById("previous").disabled = false;
        document.getElementById("next").disabled = false;
    } else {
        alert("Invalid operation");
    }
}

checkIndex(fileDate);
navigate("pre");