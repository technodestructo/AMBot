/*
 * Antimatter Dimensions bot
 * technodestructo
 * 09/02/17
 */

//var firstDimension;
var maxAll;
var doSoftReset;
var doSecondSoftReset;
var doInfinity;
var doMaxes;
var doSingles;

var amBot = document.createElement('script');
amBot.src = "//code.jquery.com/jquery-1.10.2.min.js";
document.getElementsByTagName('head')[0].appendChild(amBot);

var GUIsetup = setInterval(initGUI, 1000);

function initGUI() {
	$("#dimensions").append('<div id="AMBotContainer" style="background-color:#29333d; width:100px; height:100px; position:absolute; bottom:100px; left:0; z-index:200000000">' +

			  '</div>'
	);
	
	$("#AMBotContainer").append('<button id="AMBotStartStop" style="height:80%; background-color:#c6d9ec; width:50px; margin:10px;">Start</button>');
	
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
	
	$("#AMBotContainer").append('<div id="AMBotTitleTab" sytle="position:absolute; right:0; top:0; bottom:0; width:200px">');
	$("#AMBotTitleTab").append('<p style="-webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); margin-top:-100%; margin-right:-80px; font-family:Helvetica; font-weight:Light; font-size:20pt;">ambot eleven</p>');
}

function startAMBot() {
	doInfinity = setInterval(clickinfinity, 1)
	maxAll = setInterval(clickMaxAll, 1)
//	firstDimension = setInterval(clickfirstDimension, 1)
	doSingles = setInterval(clickSingles, 1)
	doMaxes = setInterval(clickMaxes, 1)
	doSecondSoftReset = setInterval(clickGalaxy, 1)
	doSoftReset = setInterval(clickBoost, 1)
}
	
function stopAMBot() {
//	clearInterval(firstDimension)
	clearInterval(maxAll)
	clearInterval(doMaxes)
	clearInterval(doSingles)
	clearInterval(doSoftReset)
	clearInterval(doSecondSoftReset)
	clearInterval(doInfinity)
}

/*
function clickfirstDimension() {
	$("#first").click();
}
*/

function clickMaxAll() {
	$("#maxall").click();
}

function clickGalaxy() {
	if ($("#secondResetLabel").html() === "Antimatter Galaxies: requires 71 Eighth Dimensions") {
		$("#secondSoftReset").click();
	}
}

function clickBoost() {
	if ($("#resetLabel").html() != "Dimension Shift: requires 11 Eighth Dimensions" && $("#secondResetLabel").html() === "Antimatter Galaxies: requires 71 Eighth Dimensions") {
		$("#softReset").click();
	} else if ($("#resetLabel").html() != "Dimension Shift: requires 11 Eighth Dimensions" && $("#secondResetLabel").html() === "Antimatter Galaxies: requires 131 Eighth Dimensions") {
		$("#softReset").click();
	} 
}

function clickSingles() {
	$("#first").click();
	$("#tickSpeed").click();
	$("#eight").click();
	$("#seventh").click();
	$("#sixth").click();
	$("#fifth").click();
	$("#fourth").click();
	$("#third").click();
	$("#second").click();
}

function clickMaxes() {
	$("#tickSpeedMax").click();
	$("#eightMax").click();
	$("#seventhMax").click();
	$("#sixthMax").click();
	$("#fifthMax").click();
	$("#fourthMax").click();
	$("#thirdMax").click();
	$("#secondMax").click();
	$("#firstMax").click();
}

function clickinfinity() {
	$("#bigcrunch").click();
}

/* it works, but not needed because of SPEED
function clickThroughEight() {
	if ($("#resetLabel").html() === "Dimension Boost: requires 11 Fourth Dimensions") {	
		$("#fourth").click();
	} else if ($("#resetLabel").html() === "Dimension Boost: requires 11 Fifth Dimensions") {
		$("#fifth").click();
	} else if ($("#resetLabel").html() === "Dimension Boost: requires 11 Sixth Dimensions") {
		$("#sixth").click();
	} else if ($("#resetLabel").html() === "Dimension Boost: requires 11 Seventh Dimensions") {
		$("#seventh").click();
	} else if ($("#resetLabel").html() === "Dimension Boost: requires 41 Eighth Dimensions" || $("#resetLabel").html() === "Dimension Boost: requires 71 Eighth Dimensions") {	
		$("#eight").click();
	}
}
*/


//var amBot = document.createElement('script');
//amBot.src = "https://raw.github.com/technodestructo/AMBot/am_bot.js";
//document.getElementsByTagName('head')[0].appendChild(amBot);