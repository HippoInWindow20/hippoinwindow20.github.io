let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let subjectDefined = urlParams.get('subject');
let titleColour, subject, cname, desc;
const blue = "#4285F4";
const red = "#DB4437";
const green = "#0F9D58";
const yellow = "#F4B400";
switch (subjectDefined) {
    case "chinese":
        titleColour = blue;
        subject = "國文";
        cname = "蘇老師";
        desc = "素有「邏輯鬼才」之稱的蘇老師也是我們的班導。常在課堂中穿插冷笑話或似乎純粹為了喚起大家精神和注意力的話題。最近意識到授課內容增加而開始專講課內而在每節課堂前隨堂考。 ";
        break;
    case "english":
        titleColour = red;
        subject = "英文";
        cname = "呂老師";
        desc = "隨時流露強大氣場的呂老師，讓剛認識她的同學臨而卻步。久了會發現老師其實很好相處，只是在課堂上不常講輕鬆話題而顯得較為嚴肅。強調我們在課堂上給予老師互動和尊重是老師願意繼續講下去的動力。 ";
        break;
    case "math":
        titleColour = yellow;
        subject = "數學";
        cname = "張老師";
        desc = "雖然教學進度緊湊，但上課節奏比想像中還來得輕緩。敘述老嫗能解，幫助我們熟悉每堂吸收的新觀念。為了我班大部分人被動的寫作業習慣而開始每堂檢查，讓我們不至於和目前進度差太遠。 ";
        break;
    case "physics":
        titleColour = green;
        subject = "物理";
        cname = "林老師";
        desc = "對於相對非直覺而不易理解的物理領域，林老師都可有條有理的依序講解每個概念的邏輯推導以及和其他概念的連結與推廣。對於不認真聽課或精神不佳而打盹的同學會予其嚴厲勸導，督促我們認真向學勿懈怠。 ";
        break;
    case "chemistry":
        titleColour = blue;
        subject = "化學";
        cname = "許老師";
        desc = "由於大部分領域尺度極小和數不清的例外，同學學習化學常在不同地方卡關。老師也運用實際模型和網站的模型或影片幫助我們吸收更為徹底。為了探究與實作和同學反覆確認與修改，著實感佩自然科老師們的辛勞。 ";
        break;
    case "biology":
        titleColour = red;
        subject = "生物";
        cname = "鍾老師";
        desc = "自從高一下學期開始，和繼續修習選修生物的三類分道揚鑣，以複習國中生物為主，補足新舊課綱的差別。在探究與實作方面，老師同樣為了處理二邊不同實驗同學提出的想法給予建議和方向，付諸不少心力。 ";
        break;
    case "earth":
        titleColour = yellow;
        subject = "地球科學";
        cname = "尹老師";
        desc = "有自己上課節奏和步調的尹老師，講課和課本的章節次序有些許落差。雖然讓同學紀錄筆記時常不知去向，但確實有益於同學理解老師不斷強調每每學測自然科考生最常留下悔恨的地科考題。 ";
        break;
    case "history":
        titleColour = green;
        subject = "歷史";
        cname = "羅老師";
        desc = "身為二類組的社會科教師之一，羅老師授課時常運用各種講解深刻的影片和考前發下的「必勝卷」幫助我們不需另外花心思在歷史。常也是許多同學寫功課、補功課、寫罰抄或補眠的時光。 ";
        break;
    case "geography":
        titleColour = blue;
        subject = "地理";
        cname = "郭老師";
        desc = "在度過最難的第一冊之後，課堂內容逐漸轉為輕鬆活潑，老師也因此在課堂中後段播送有趣的影片讓我們在經歷一整天各科的千錘百鍊後得以好好休息。考前會提供似是而非的題庫協助我們準備。 ";
        break;
    case "social":
        titleColour = red;
        subject = "公民";
        cname = "韓老師";
        desc = "同樣慢活上課的韓老師，在每章上完之後發下複習卷為每章作結，同時以之為題庫讓同學準備段考較不會迷失方向，因為上課沒帶課本就要扣分或唱歌的規定讓每節公民課格外熱鬧。 ";
        break;
    case "cs":
        titleColour = yellow;
        subject = "資訊科學";
        cname = "曹老師";
        desc = "自帶大聲公的曹老師，在見著同學睡覺時都不免冷嘲熱諷幾句。 但由於是二類組的緣故，同學相對都自覺地認真聽課，或者在交作業或考試前找靠得住的同儕協助完成。";
        break;
    case "pe":
        titleColour = green;
        subject = "體育";
        cname = "吳老師";
        desc = "每節課帶我們鍛鍊身體的亞潔老師，常因我們偶爾的考試而帶書下來複習，或不斷地延後下課而感到相當煩躁。為了大部分運動細胞不發達的同學，每當遇到天氣狀況良好的課都會叮囑我們加緊練習。 ";
        break;
    case "life":
        titleColour = blue;
        subject = "生命教育";
        cname = "鄧老師";
        desc = "每節課配合不同授課參考資料(MV,卡牌,學習單…)試著活絡課堂氣氛的生命教育課，總是因為同學不懂本課意義何在而拿來填補自己還沒完成的工作，然後就會被老師不斷叮囑或直接收走。 ";
        break;
    case "music":
        titleColour = red;
        subject = "音樂";
        cname = "王老師";
        desc = "聲稱少吸空氣減肥法的心潔老師，教授我們基本音樂史和基礎樂理。考試模式通常相當格外不同，讓我們對音樂課留下不錯的印象。除了課堂中後段放的影片目前常令部分同學作嘔。 ";
        break;
    case "engcon_a":
        titleColour = yellow;
        subject = "英語會話 A";
        cname = "Dalena 老師 (Ms. Tran)";
        desc = "老師上課時很幽默，並且會時常安排報告，讓同學們確實增強英文會話的能力。";
        break;
    case "engcon_b":
        titleColour = green;
        subject = "英語會話 B";
        cname = "Paul 老師";
        desc = "留著沖天鳳梨頭的Paul老師，上課時常不用課本，而是和我們聊最新時事話題或是最近發生什麼有趣的點點滴滴。不過同學面對外語人士較害羞的緣故，面對老師熱情的互動顯得冷淡許多。 ";
        break;
    case "selfstudy_a":
        titleColour = blue;
        subject = "自主學習 A";
        cname = "蘇老師 (同國文)";
        desc = "因為108課綱以及學習歷程，蘇老師格外重視同學們的自主學習成果，並且嚴格執行每節課檢核。";
        break;
    case "selfstudy_b":
        titleColour = red;
        subject = "自主學習 B";
        cname = "杜老師";
        desc = "身為自主學習的老師，面對我們形形色色的方案都會予以指導。若主題較偏專業領域，杜老師也會想知道些關於此領域的大概情狀。但最常是同學很長一直缺交計畫書而讓老師頭痛。";
        break;
    case "explore":
        titleColour = yellow;
        subject = "探究與實作";
        cname = "林老師、許老師、鍾老師";
        desc = "探究課以老師的引導實驗起頭，過程同學須從其發想自己組的主題進行探究，推演出一套實驗的邏輯脈絡。老師只會從旁協助而非指導。本學期探究老師為物理、化學和生物老師，主題可選滲透、細胞觀察或顯微鏡DIY。";
        break;
    default:
        titleColour = "black";
        subject = "Subject Not Found";
        cname = "Name Not Available";
        desc = "The credentials submitted was not valid and the database returned no matching data.";
}
document.getElementById("title").style.background = titleColour;
document.getElementById("subject").innerHTML = subject;
document.getElementById("name").innerHTML = cname;
document.getElementById("desc").innerHTML = desc;