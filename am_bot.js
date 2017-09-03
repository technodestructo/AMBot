/*
 * Antimatter Dimensions bot
 * technodestructo
 * 09/02/17
 */

var firstDimension;
var maxAll;
var doSoftReset;
var doSecondSoftReset;
var doInfinity;

var amBot = document.createElement('script');
amBot.src = "//code.jquery.com/jquery-1.10.2.min.js";
document.getElementsByTagName('head')[0].appendChild(amBot);

var GUIsetup = setInterval(initGUI, 1000);

function initGUI() {
	$("#dimensions").append('<div id="AMBotContainer" style="background-color:#333; width:100px; height:100px; position:absolute; bottom:100px; left:0; z-index:200000000">' +

			  '</div>'
	);
	
	$("#AMBotContainer").append('<button id="AMBotStartStop" style="height:80%; width:50px; margin:10px;">Start</button>');
	
	$("#AMBotStartStop").bind('click', function() {
		if($(this).html() === "Start") {
			startAMBot();
			$(this).html("Stop");
		}
		else {
			stopAMBot();
			$(this).html("Start");
		}
	});
	
	clearInterval(GUIsetup);
	
	$("#AMBotContainer").append('<div id="AMBotTitleTab" sytle="position:absolute; right:0; top:0; bottom:0; width:30px">');
	$("#AMBotTitleTab").append('<p style="-webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); margin-top:-104px; margin-right:-63px; font-family:Helvetica; font-size:20pt;">AMBot</p>');
}

/*
function startAMBot() {
	firstDimension = setInterval(clickfirstDimension, 1000)
	maxAll = setInterval(clickMaxAll, 250)
	doSoftReset = setInterval(clickSoftReset, 5000)
	doSecondSoftReset = setInterval(clickSecondSoftReset, 5000)
	doInfinity = setInterval(clickinfinity, 5000)
}
*/

function startAMBot() {
	doInfinity = setInterval(clickinfinity, 1000)
	firstDimension = setInterval(clickfirstDimension, 1000)
	maxAll = setInterval(clickMaxAll, 250)
    if ($("#secondResetLabel").html() === "Antimatter Galaxies: requires 71 Eighth Dimensions")  && ($("#eightAmount").html() === "71 (1)")   {
        doSecondSoftReset = setInterval(clickSecondSoftReset, 250)
    } else {
	clearInterval(doSecondSoftReset)
	}
	if ($("#resetLabel").html() === "Dimension Boost: requires 71 Eighth Dimensions")	{
		clearInterval(doSoftReset)
	} else {
	doSoftReset = setInterval(clickSoftReset, 1000)
	}
	
}

function stopAMBot() {
	clearInterval(firstDimension)
	clearInterval(maxAll)
	clearInterval(doSoftReset)
	clearInterval(doSecondSoftReset)
	clearInterval(doInfinity)
}

function clickfirstDimension() {
	$("#first").click();
}

function clickMaxAll() {
	$("#maxall").click();
}

function clickSoftReset() {
	$("#softReset").click();
}

function clickSecondSoftReset() {
	$("#secondSoftReset").click();
}

function clickinfinity() {
	$("#bigcrunch").click();
}

//var amBot = document.createElement('script');
//amBot.src = "https://raw.github.com/technodestructo/AMBot/am_bot.js";
//document.getElementsByTagName('head')[0].appendChild(amBot);