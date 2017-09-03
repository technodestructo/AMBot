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
var doThroughEight;

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
	$("#AMBotTitleTab").append('<p style="-webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); margin-top:-104px; margin-right:-63px; font-family:Helvetica; font-size:20pt;">AMBot eights</p>');
}

function startAMBot() {
	doInfinity = setInterval(clickinfinity, 500)
	firstDimension = setInterval(clickfirstDimension, 500)
	doThroughEight = setInterval(clickThroughEight, 500)
	maxAll = setInterval(clickMaxAll, 50)
	doSecondSoftReset = setInterval(clickSecondSoftReset, 500)
	doSoftReset = setInterval(clickSoftReset, 500)
}
	
function stopAMBot() {
	clearInterval(firstDimension)
	clearInterval(maxAll)
	clearInterval(doSoftReset)
	clearInterval(doSecondSoftReset)
	clearInterval(doInfinity)
	clearInterval(doThroughEight)
}

function clickfirstDimension() {
	$("#first").click();
}

function clickMaxAll() {
	$("#maxall").click();
}

function clickSecondSoftReset() {
	if ($("#secondResetLabel").html() === "Antimatter Galaxies: requires 71 Eighth Dimensions") {
		$("#secondSoftReset").click();
	}
}

function clickSoftReset() {
	if ($("#resetLabel").html() != "Dimension Boost: requires 71 Eighth Dimensions") {	
		$("#softReset").click();
	}
}

function clickThroughEight() {
	if ($("#resetLabel").html() === "Dimension Boost: requires 11 Fourth Dimensions") {	
		$("#fourth").click();
	} else if ($("#resetLabel").html() === "Dimension Boost: requires 11 Fifth Dimensions") {
		$("#fifth").click();
	} else if ($("#resetLabel").html() === "Dimension Boost: requires 11 Sixth Dimensions") {
		$("#sixth").click();
	} else if ($("#resetLabel").html() === "Dimension Boost: requires 11 Seventh Dimensions") {
		$("#seventh").click();
	} else if ($("#resetLabel").html() === "Dimension Boost: requires 41 Eighth Dimensions" || $("#resetLabel").html() === "Dimension Boost: requires 56 Eighth Dimensions" || $("#resetLabel").html() === "Dimension Boost: requires 71 Eighth Dimensions") {	
		$("#eight").click();
	}
}

function clickinfinity() {
	$("#bigcrunch").click();
}

//var amBot = document.createElement('script');
//amBot.src = "https://raw.github.com/technodestructo/AMBot/am_bot.js";
//document.getElementsByTagName('head')[0].appendChild(amBot);