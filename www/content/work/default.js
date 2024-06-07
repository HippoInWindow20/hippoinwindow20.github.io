let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let jobDefined = urlParams.get('job');
let titleColour, job, cname, desc;
const blue = "#4285F4";
const red = "#DB4437";
const green = "#0F9D58";
const yellow = "#F4B400";
switch (jobDefined) {
    case "leader":
        titleColour = blue;
        job = "班長";
        cname = "林○丞 同學";
        desc = "大概是我們班數一數二的長人。負責主持班會，通常各處室報告也是找班長集合，同時擔任班聯會的一員。";
        break;
    case "leader_assistant":
        titleColour = red;
        job = "副班長";
        cname = "陳○竹 同學";
        desc = "班級網站編輯團隊一員。除了程式編寫之外，英文能力同樣當仁不讓。有時被叫石油大亨。";
        break;
    case "rule":
        titleColour = yellow;
        job = "風紀股長";
        cname = "王○育 同學";
        desc = "班上數一數二很會寫程式的人。對於管理班級這塊有時會被隨機臨檢的班導叨唸幾句。";
        break;
    case "art":
        titleColour = green;
        job = "學藝股長";
        cname = "張○青 同學";
        desc = "既會繪畫還會拉小提琴，堪稱班上真文青。海報競賽自己一組得第一名，可見其功力深厚。";
        break;
    case "pe":
        titleColour = blue;
        job = "體育股長";
        cname = "林○凡 同學";
        desc = "屬於班上成績前幾名的認真好學生，也有參加排球隊。同時是班上眾多宅宅的一份子。";
        break;
    case "general":
        titleColour = red;
        job = "總務股長";
        cname = "吳○瑄 同學";
        desc = "常會被一群男生圍在旁邊，聽她心情好會上的化學考前衝刺課。";
        break;
    case "test":
        titleColour = yellow;
        job = "試務股長";
        cname = "陳○均 同學";
        desc = "班上宅宅之一，因有時和別人搞莫名的基情而管他叫噁男。但老師在課堂上抽到班上某個女同學也會中槍。";
        break;
    case "hygiene":
        titleColour = green;
        job = "衛生股長";
        cname = "古○宇 同學";
        desc = "和一些男生為伍，平時下課就不斷在亂搞每個女同學的水壺和水壺套。";
        break;
    case "eco":
        titleColour = blue;
        job = "環保股長";
        cname = "沈○寧 同學";
        desc = "平時閑靜少言，班上宅宅之一。有時老師提問某個歷史問題會無預警地說話。";
        break;
    case "recycle":
        titleColour = red;
        job = "資源回收股長";
        cname = "易○騰 同學";
        desc = "平時除了管理資源回收區，還要照顧班上的共同信仰瓜瓜。";
        break;
    case "info":
        titleColour = yellow;
        job = "資訊股長";
        cname = "許○誠 同學";
        desc = "班級網站編輯一員。見著學校班牌軟體醜陋的排版設計後，便以此為自主學習計畫大刀闊斧地改造一番，結果還挺入得眼的。視電子班牌為其子，當表現不佳時他便會對它好好調教一下。認識更深之後就會發現他鮮為人知的另一面。";
        break;
    case "assist":
        titleColour = green;
        job = "輔導股長";
        cname = "陳○宇 同學";
        desc = "向班級宣達輔導室宣導事項。積極參與班級群組的討論。";
        break;
    case "greenify":
        titleColour = blue;
        job = "綠化股長";
        cname = "趙○凱 同學";
        desc = "除了也是成績前段的一員外，具備資深宅宅的各項能力。他願意的話就會突然跳上一段御宅藝。";
        break;
    case "covid":
        titleColour = red;
        job = "防疫股長";
        cname = "蔡○廣 同學";
        desc = "負責放學後消毒同學桌面。有時也會被叫做噁男。";
        break;
    case "representative":
        titleColour = yellow;
        job = "班級代表";
        cname = "劉○祐、張○愷 同學";
        desc = "負責參與學生會，代表班級表達意見。前者熟稔武術，試著創立武術社卻以不了了之告終。後者是熱音社一員，看到熱音社學長的吉他表演便不斷想和他們看齊。";
        break;
    default:
        titleColour = "black";
        job = "Unknown Job Type";
        cname = "Name Unknown";
        desc = "The credentials submitted was not valid and the database returned no matching data.";
        break;
}
document.getElementById("title").style.background = titleColour;
document.getElementById("job").innerHTML = job;
document.getElementById("name").innerHTML = cname;
document.getElementById("desc").innerHTML = desc;