var data = [
    [

        "eng20220627.html",
        "math20220506-2.html",
        "math20220506-1.html",
        "chemistry20220224.html",
        "chi20220224.html",
        "eng20220218-3.html",
        "eng20220218-2.html",
        "eng20220218.html",
        "chi20211221.html"
    ],

    [
        "2022-06-27 [英文] 期考手寫2解答",
        "2022-05-06 [數學] A卷第9~11回 + B卷第11回 (圖片版)",
        "2022-05-06 [數學] A卷第9~11回 + B卷第11回 (PDF版)",
        "2022-02-24 [化學] 考卷第9回詳解",
        "2022-02-24 [國文] 古今閱讀考卷第6、7回詳解",
        "2022-02-18 [英文] Target Reading Super Bowl 筆記",
        "2022-02-18 [英文] 句型卷第9回解答",
        "2022-02-18 [英文] All+ 雜誌 12月份 Unit 2~3 考卷 + 解答",
        "2021-12-21 [國文] 古今悅讀考卷 3、4回"
    ],
    [

        "eng",
        "math",
        "math",
        "chemistry",
        "chi",
        "eng",
        "eng",
        "eng",
        "chi"
    ]
];

function loadData() {
    var ArrayLength = data[0].length;
    document.getElementById("mainTable").innerHTML = null;
    for (i = 0; i < ArrayLength; i++) {
        var tableNew = document.getElementById('mainTable');
        tableNew.innerHTML += "<td id='number" + i + "' class='defaultStyle'><img src='icons/" + data[2][i] + ".png' style='height: 2.5vh;'><a class='link' title='" + data[1][i] + "' href='" + data[0][i] + "'>" + data[1][i] + "</a></td><br>";
    }

}

function search() {
    var ArrayLength = data[0].length;
    var keyword = document.getElementById("keyword").value;
    if (keyword) {
        document.getElementById("mainTable").innerHTML = null;
        var cellNum = 0;
        for (i = 0; i < ArrayLength; i++) {
            var entry = data[1][i];
            var decision = entry.includes(keyword);
            if (decision == true) {
                var tableNew = document.getElementById('mainTable');
                tableNew.innerHTML += "<td id='number" + i + "' class='defaultStyle'><img src='icons/" + data[2][i] + ".png' style='height: 2.5vh;'><a class='link' title='" + data[1][i] + "' href='" + data[0][i] + "'>" + data[1][i] + "</a></td><br>";
            }
        }
        if (document.getElementById("mainTable").innerHTML)
            var iii = 1; //Useless Action
        else {
            var tableNew = document.getElementById('mainTable');
            var row = tableNew.insertRow(0);
            var cell = row.insertCell(0);
            cell.id = "number";
            cell.className = "defaultStyle";
            document.getElementById("number").innerHTML = "未有符合關鍵字的項目。";
        }
    } else
        alert("請輸入關鍵字");
}

function searchsub() {
    var ArrayLength = data[0].length;
    var keyword = document.getElementById("subjectsearch").value;
    document.getElementById("mainTable").innerHTML = null;
    var cellNum = 0;
    for (i = 0; i < ArrayLength; i++) {
        var entry = data[1][i];
        var decision = entry.includes(keyword);
        if (decision == true) {
            var tableNew = document.getElementById('mainTable');
            tableNew.innerHTML += "<td id='number" + i + "' class='defaultStyle'><img src='icons/" + data[2][i] + ".png' style='height: 2.5vh;'><a class='link' title='" + data[1][i] + "' href='" + data[0][i] + "'>" + data[1][i] + "</a></td><br>";
        }
    }
    if (document.getElementById("mainTable").innerHTML) {} else {
        var tableNew = document.getElementById('mainTable');
        var row = tableNew.insertRow(0);
        var cell = row.insertCell(0);
        cell.id = "number";
        cell.className = "defaultStyle";
        document.getElementById("number").innerHTML = "該科目沒有詳解。";
    }
}

function closeaction() {
    document.getElementById("closesearch").display = "none";
    document.getElementById("searchtools").display = "none";
    document.getElementById("showsearch").display = "block";
}

function showaction() {
    document.getElementById("closesearch").display = "block";
    document.getElementById("searchtools").display = "block";
    document.getElementById("showsearch").display = "none";
}