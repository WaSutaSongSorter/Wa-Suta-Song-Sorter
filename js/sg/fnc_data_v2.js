// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 20;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 7;
var ary_TitleData = [
  "The World Standard",
  "Paradox World",
  "Jumping Summer",
  "Girls, Be Ambitious!",
    "Singles"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
//album - The World Standard
[1, "Ultra Miracle-cle Final Ultimate Choco Beam", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],
[1, "Doki Doki Today", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],
[1, "Wonderful World", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],
[1, "Suki na Hito toka Imasu ka", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],
[1, "Zili Zili Love", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],
[1, "Ranran Jidai", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],
[1, "Niko Niko Hanbunko", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],
[1, "Suika-Wari", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],
[1, "Chiisana Chiisana(Tiny Tiny)", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],
[1, "Inu Neko. Seishun Massakari(Dogs & Cats, In the Bloom of Youth)", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],
[1, "Ima wa Mukashi", [1,0,0,0,0,0,0,0], "wasuta/tws.png"],

//album - Paradox World
[1, "Koisuru Nyakotan", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
[1, "Just be yourself", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
[1, "Saijōkyū Paradox", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
[1, "Magical Word", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
[1, "Nee Aishite Mite", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
[1, "Kanzen'naru Aidoru(The Perfect Idol)", [0,0,0,1,0,0,0,0], "wasuta/kanzen.jpg"],
[1, "Stay with me baby", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
[1, "Yuumei ni, Nyaritai.", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
[1, "NEW Nyaku Nyaku Nya Suizokukan 2", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
[1, "Pawawawawan!!! Powerpuff Girls", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
[1, "Guuchoki Pantsu no Masayoshi-san", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
[1, "Yakusoku Dakara ", [0,1,0,0,0,0,0,0], "wasuta/paradox.png"],
    
//album - Jumping Summer
[1, "JUMPING SUMMER", [0,0,1,0,0,0,0,0], "wasuta/jumpingsummer.png"],
[1, "Tapioca Milk Tea", [0,0,1,0,0,0,0,0], "wasuta/jumpingsummer.png"],
[1, "PLATONIC GIRL", [0,0,1,0,0,0,0,0], "wasuta/jumpingsummer.png"],
[1, "Standalone Complex", [0,0,1,0,0,0,0,0], "wasuta/jumpingsummer.png"],
[1, "Pretty☆Channel", [0,0,1,0,0,0,0,0], "wasuta/jumpingsummer.png"],

//galbi
[1, "Taishi o Dake! Garubi Ambitious!", [0,0,0,1,0,0,0,0], "wasuta/galbi.png"],
[1, "Yo Quiero Vivir", [0,0,0,1,0,0,0,0], "wasuta/galbi.png"],
[1, "Dedesupabon!", [0,0,0,1,0,0,0,0], "wasuta/galbi.png"],
[1, "Yādā", [0,0,0,1,0,0,0,0], "wasuta/galbi.png"],
[1, "KIRA KIRA Hologram", [0,0,0,1,0,0,0,0], "wasuta/galbi.png"],

    
//singles
[1, "GOGO! PuriParaifu", [0,0,0,0,1,0,0,0], "wasuta/single.jpg"],
[1, "Hello Hello Friends", [0,0,0,0,1,0,0,0], "wasuta/single.jpg"],
[1, "Welcome To Dream", [0,0,0,0,1,0,0,0], "wasuta/welcometodream.jpg"]
];    

