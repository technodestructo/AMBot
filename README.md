# AMBot
Bot for Antimatter Dimensions (http://ivark.github.io/)

It does things for you because things go fast sometimes and we all could use a helping hand.

How to use
-----------
Create a bookmarklet with the following URL:

```
javascript:var amBot = document.createElement('script');amBot.src="https://rawgit.com/technodestructo/AMBot/master/am_bot.js";document.getElementsByTagName('head')[0].appendChild(amBot);
```

Or copy paste into console:

```
var amBot = document.createElement('script');

amBot.src = "https://rawgit.com/technodestructo/AMBot/master/am_bot.js";

document.getElementsByTagName('head')[0].appendChild(amBot);
```

GUI Loads in bottom left, press start and it will fulfill its purpose.

Built with intention for Custom CSS, for use with Stylebot/Stylish:
```
#coinAmount {
    color: #d5bff2 ;
    font-family: consolas;
    font-size: 92px ;
    font-weight: normal;
}

#dimensionsbtn, #optionsbtn, #statisticsbtn, #achievementsbtn, #infinitybtn, #challengesbtn {
    background: #758ca3 ;
    color: #c6d9ec ;
    font-size: 16px ;
    font-weight: normal;
}

#totalmoney, #totalresets, #galaxies, #infinitied, #bestInfinity, #thisInfinity, #totalTime {
    color: #8a99a8;
    font-weight: normal;
}

#firstD, #secondD, #thirdD,#fourthD, #fifthD, #sixthD, #seventhD, #eightD {
    color: #a3b3c2 ;
    font-size: 16px ;
    font-weight: normal;
}

#resetLabel, #secondResetLabel {
    color: #a3b3c2 ;
    font-size: 16px ;
    font-weight: normal;
}

#firstAmount, #secondAmount, #thirdAmount,#fourthAmount, #fifthAmount, #sixthAmount, #seventhAmount, #eightAmount {
    color: #8a99a8 ;
    font-size: 16px ;
    font-weight: normal;
}

.container {
    color: #c6d9ec ;
    font-size: 14px ;
    font-weight: normal;
}

.storebtn {
    background: #758ca3 ;
    border: 1px solid #c6d9ec;
    color: #c6d9ec ;
    font-size: 12px ;
    font-weight: normal;
}

.unavailablebtn {
    background: #29333d ;
    border: 1px solid #47596b ;
    color: #537eac ;
    font-size: 12px ;
    font-weight: normal;
}

#secondSoftReset, #softReset {
    font-family: helvetica;
    font-size: 12px;
    font-weight: normal;
}

a {
    font-size: 16px ;
    color: #c6d9ec;
    font-weight: normal;
}

body {
    background-color: #252525 ;
    margin: 0 10% 0 10% ;
}

#progressbar {
    color: #a112a1 ;
    background-color: #d5bff2 ;
}

#progress {
    background-color: #625062 ;
}
```
