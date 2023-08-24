var data = [
    ["2022/9/1 處室公告", "20220901"],
    ["2022/8/31 處室公告", "20220831"]
];


function fetchAll() {
    data.forEach(element => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
                maxIndex = xmlDoc.getElementsByTagName("doc")[0].getElementsByTagName("notice").length;
                document.getElementById("menu").innerHTML += "<div class='menu'><a href='content.html?date=" + element[1] + "'><h3>" + element[0] + "</h3></a><h4>" + maxIndex + " 則公告</h4><hr /></div>";
            }

        };
        xhttp.open("GET", element[1] + ".xml", true);
        xhttp.send();
    });
}

fetchAll();