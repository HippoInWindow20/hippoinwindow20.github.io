var parsedStations = station_list;

function getStations(number) {
    var line = document.getElementById("line" + number).value;
    var x = document.getElementById("station" + number);
    x.innerHTML = "";
    for (var i = 0;i < parsedStations[line].length;i++) {
        var option = document.createElement("option");
        option.text = parsedStations[line][i][0] +" "+ parsedStations[line][i][1];
        option.value = i + "," + line + "," + parsedStations[line][i][0];
        x.add(option);
    }
}

getStations(1)
getStations(2)

function setLine(){
    var line1 = document.getElementById("line1").value;
    var line2 = document.getElementById("line2").value;
    var station1 = document.getElementById("station1").value;
    var index1 = station1.split(",")[0];
    var code1 = station1.split(",")[2];
    var isFinal1 = document.getElementById("final1").checked ? 1 : 0;
    var station2 = document.getElementById("station2").value;
    var index2 = station2.split(",")[0];
    var code2 = station2.split(",")[2];
    var isFinal2 = document.getElementById("final2").checked ? 1 : 0;
    var url1 = `waiting.html?colour=${line1}&num=${code1}&dest_zh=${parsedStations[line1][index1][1]}&dest_en=${parsedStations[line1][index1][2]}&dest_jp=${parsedStations[line1][index1][3]}&dest_kr=${parsedStations[line1][index1][4]}&is_final=${isFinal1}&time=${counter1}`
    var url2 = `waiting.html?colour=${line2}&num=${code2}&dest_zh=${parsedStations[line2][index2][1]}&dest_en=${parsedStations[line2][index2][2]}&dest_jp=${parsedStations[line2][index2][3]}&dest_kr=${parsedStations[line2][index2][4]}&is_final=${isFinal2}&time=${counter2}`
    document.getElementById('train1').src = url1;
    document.getElementById('train2').src = url2;
}