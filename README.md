# AMBot
Bot for Antimatter Dimensions (http://ivark.github.io/)

It does things for you because things go fast sometimes and we all could use a helping hand.

How to use
-----------
Create a bookmarklet with the following URL:

Chrome:
```
javascript:var amBot = document.createElement('script');amBot.src="https://rawgit.com/technodestructo/AMBot/master/AMBot.js";document.getElementsByTagName('head')[0].appendChild(amBot);
```
Firefox:
```
javascript: (function () { 
    var amBot = document.createElement('script'); 
    amBot.setAttribute('src', 'https://rawgit.com/technodestructo/AMBot/master/AMBot.js');                  
  document.body.appendChild(amBot); 
 }());
 ```

Or copy paste into console:

```
var amBot = document.createElement('script');

amBot.src = "https://rawgit.com/technodestructo/AMBot/master/AMBot.js";

document.getElementsByTagName('head')[0].appendChild(amBot);
```

GUI Loads in top left, press start and it will fulfill its purpose.

Built with intention for Custom CSS, for use with Stylebot/Stylish:
```
#challengetimes, #stats {
    font-size: 11pt;
    font-weight: normal;
}

#coinAmount, #infDimMultAmount, #infPowAmount {
    color: #d5bff2 ;
    font-size: 50px;
    font-weight: normal;
}

#dimensions {
    margin: 0 5% 0 5%;
}

#dimensionsbtn, #optionsbtn, #statisticsbtn, #achievementsbtn, #infinitybtn, #challengesbtn {
    background: #758ca3;
    color: #c6d9ec;
    font-size: 16px;
    font-weight: normal;
}

#firstAmount, #secondAmount, #thirdAmount, #fourthAmount, #fifthAmount, #sixthAmount, #seventhAmount, #eightAmount {
    color: #8a99a8;
    display: initial;
    font-size: 16px;
    font-weight: normal;
}

#firstD, #secondD, #thirdD, #fourthD, #fifthD, #sixthD, #seventhD, #eightD {
    color: #a3b3c2;
    font-size: 16px;
    font-weight: normal;
}

#lasttenruns {
    font-size: 11pt;
    font-weight: normal;
    margin-top: 3%;
}

#postInfinityButton {
    color: #FFFFFF;
    display: initial;
    font-weight: normal;
}

#resetLabel, #secondResetLabel {
    color: #a3b3c2;
    font-size: 16px;
    font-weight: normal;
}

#sacrifice.storebtn, #confirmation {
    display: inline-block;
}

#secondRow, #thirdRow, #fourthRow, #fifthRow, #sixthRow, #seventhRow, #eightRow {
    display: table-row;
    width: 100%;
}

#secondSoftReset, #softReset {
    font-family: helvetica;
    font-size: 13px;
    font-weight: normal;
}

#totalmoney, #totalresets, #galaxies, #infinitied, #bestInfinity, #thisInfinity, #totalTime {
    color: #8a99a8;
    font-weight: normal;
}

.challengediv {
    background: #758ca3;
    color: #c6d9ec;
    font-size: 11px;
    font-weight: normal;
}

.container {
    color: #c6d9ec;
    font-size: 14px;
    font-weight: normal;
}

.secondarytabbtn {
    background: #758ca3;
    color: #c6d9ec;
    font-size: 12px;
    font-weight: normal;
}

.storebtn {
    background: #758ca3;
    border: 1px solid #c6d9ec;
    color: #c6d9ec;
    font-weight: normal;
}

.unavailablebtn {
    background: #29333d;
    border: 1px solid #47596b;
    color: #537eac;
    font-size: 14px;
    font-weight: normal;
}

a {
    color: #c6d9ec;
    font-size: 14pt;
    font-weight: normal;
}

body {
    background-color: #252525;
    border: #c6d9ec;
}

button {
    font-weight: normal;
}

div {
    color: #c6d9ec;
    font-weight: normal;
}

span, button, body, a, div {
    -webkit-font-smoothing: none;
}
```
