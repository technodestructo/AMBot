/*
 * Antimatter Dimensions bot
 * technodestructo
 * 09/02/17
 */

var intervals = [];

var amBot = document.createElement('script');
amBot.src = "//code.jquery.com/jquery-1.10.2.min.js";
document.getElementsByTagName('head')[0].appendChild(amBot);

var GUIsetup = setInterval(initGUI, 1000);

function initGUI() {
	$("#body").append('<div id="AMBotContainer" style="background-color:#29333d; width:100px; height:100px; position:absolute; top:100px; left:0; z-index:200000000">' +

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
	
	$("#AMBotContainer").append('<div id="AMBotTitleTab" sytle="position:absolute; right:0; top:0; bottom:0; width:100px">');
	$("#AMBotTitleTab").append('<p style="-webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); margin-top:-110px; margin-right:-80px; font-family:Helvetica; font-weight:Light; font-size:20pt; color:#c6d9ec;">ambot ∞</p>');
	$("#dimensions").prepend('<div id="thisInfinity">');
	$("#dimensions").prepend('<div id="bestInfinity">');
	$("#dimensions").prepend('<div id="infinitied">');
}

function el(id) {
	return document.getElementById(id);
}

var $maxall = el("maxall");
//var $secondResetLabel = el("secondResetLabel");
//var $secondSoftReset = el("secondSoftReset");
//var $resetLabel = el("resetLabel");
//var $softReset = el("softReset");

function startAMBot() {
	intervals = [
		setInterval(clickinfinity, 1),
		setInterval(clickMaxAll, 1),
		setInterval(clickSingles, 1),
		setInterval(clickMaxes, 1),
	/*	setInterval(function () {
			var second_html = $secondResetLabel.innerHTML;
			var reset_html = $resetLabel.innerHTML;
			if(second_html === "Antimatter Galaxies: requires 71 Eighth Dimensions") {
			clickGalaxy();
			}
			if(reset_html !== "Dimension Boost: requires 11 Eighth Dimensions") {
				if(second_html === "Antimatter Galaxies: requires 131 Eighth Dimensions" || second_html === "Antimatter Galaxies: requires 71 Eighth Dimensions") {
					clickBoost();
				}
			}
		}, 1)*/
	];
}
	
function stopAMBot() {
	intervals.forEach(function (interval) { clearInterval(interval); });
}

function clickMaxAll() {
	$maxall.click();
}

/*function clickGalaxy() {
	$secondSoftReset.click();
}

function clickBoost() {
	$softReset.click();
}*/

var $tickSpeed = el("tickSpeed");
var $eight = el("eight");
var $seventh = el("seventh");
var $sixth = el("sixth");
var $fifth = el("fifth");
var $fourth = el("fourth");
var $third = el("third");
var $second = el("second");
var $first = el("first");

function clickSingles() {
	$tickSpeed.click();
	$eight.className==="storebtn" && $eight.click();
	$seventh.className==="storebtn" && $seventh.click();
	$sixth.className==="storebtn" && $sixth.click();
	$fifth.className==="storebtn" && $fifth.click();
	$fourth.className==="storebtn" && $fourth.click();
	$third.className==="storebtn" && $third.click();
	$second.className==="storebtn" && $second.click();
	$first.className==="storebtn" && $first.click();
}

var $tickSpeedMax = el("tickSpeedMax");
var $eightMax = el("eightMax");
var $seventhMax = el("seventhMax");
var $sixthMax = el("sixthMax");
var $fifthMax = el("fifthMax");
var $fourthMax = el("fourthMax");
var $thirdMax = el("thirdMax");
var $secondMax = el("secondMax");
var $firstMax = el("firstMax");

function clickMaxes() {
	$tickSpeedMax.click();
	$eightMax.className==="storebtn" && $eightMax.click();
	$seventhMax.className==="storebtn" && $seventhMax.click();
	$sixthMax.className==="storebtn" && $sixthMax.click();
	$fifthMax.className==="storebtn" && $fifthMax.click();
	$fourthMax.className==="storebtn" && $fourthMax.click();
	$thirdMax.className==="storebtn" && $thirdMax.click();
	$secondMax.className==="storebtn" && $secondMax.click();
	$firstMax.className==="storebtn" && $firstMax.click();
}

var $bigcrunch = el("bigcrunch");

function clickinfinity() {
	$bigcrunch.style.display === "block" && $bigcrunch.click();
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