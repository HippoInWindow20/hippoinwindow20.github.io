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
        desc = "屬於班上成績前幾名的認真好學生，也有參加排球隊。";
        break;
    case "general":
        titleColour = red;
        job = "總務股長";
        cname = "吳○瑄 同學";
        desc = "也擔任化學小老師。樂於解決同學關於化學的疑難雜症。";
        break;
    case "test":
        titleColour = yellow;
        job = "試務股長";
        cname = "陳○均 同學";
        desc = "負責去註冊組拿回成績確認單或悠遊卡註冊貼紙。";
        break;
    case "hygiene":
        titleColour = green;
        job = "衛生股長";
        cname = "古○宇 同學";
        desc = "維護教室各個可能藏污納垢的小角落。在被班導的監督之下，班上的玻璃特別乾淨。";
        break;
    case "eco":
        titleColour = blue;
        job = "環保股長";
        cname = "沈○寧 同學";
        desc = "平時閑靜少言。有時老師提問某個歷史問題會不斷提問。";
        break;
    case "recycle":
        titleColour = red;
        job = "資源回收股長";
        cname = "易○騰 同學";
        desc = "平時除了管理資源回收區，還要照顧班上的共同信仰⎾瓜瓜。⏌";
        break;
    case "info":
        titleColour = yellow;
        job = "資訊股長";
        cname = "許○誠 同學";
        desc = "班級網站編輯一員。見著學校班牌軟體的排版設計，自覺不滿意，便以此為自主學習計畫大刀闊斧地改造一番，結果還挺入得眼的。";
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
        desc = "班上成績前段的一員，同時也是數學和物理大師。樂於上課提問，常常以同學不太能聽懂的語言與老師討論。";
        break;
    case "covid":
        titleColour = red;
        job = "防疫股長";
        cname = "蔡○廣 同學";
        desc = "負責放學後消毒同學桌面，疫情期間絕對不能少了他。";
        break;
    case "representative":
        titleColour = yellow;
        job = "班級代表";
        cname = "劉○祐、張○愷 同學";
        desc = "負責參與學生會，代表班級表達意見。前者熟稔武術，且曾獲得多項國內獎項。後者是熱音社一員，看到熱音社學長的吉他表演便不斷想和他們看齊。";
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