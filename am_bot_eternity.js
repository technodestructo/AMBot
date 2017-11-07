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
	$("#body").append('<div id="AMBotContainer" style="background-color:#29333d; width:105px; height:40px; position:absolute; top:0px; left:0; z-index:200000000">' +

			  '</div>'
	);
	
	$("#AMBotContainer").append('<button id="AMBotStartStop" style="height:80%; background-color:#c6d9ec; width:45px;">Start</button>');
	
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
	
	$("#AMBotContainer").append('<div id="AMBotTitleTab" sytle="position:absolute; left:0; top:0; bottom:0; width:45px">');
	$("#AMBotTitleTab").append('<p style="position:absolute; right:0; top:0; bottom:0; font-family:Helvetica; font-weight:Light; font-size:14pt; color:#c6d9ec;">ambot&nbsp</p>');
	$("#dimensions").prepend('<div id="thisInfinity">');
	$("#dimensions").prepend('<div id="bestInfinity">');
	$("#dimensions").prepend('<div id="infinitied">');
}

function el(id) {
	return document.getElementById(id);
}

var $maxall = el("maxall");
var $secondResetLabel = el("secondResetLabel");
var $secondSoftReset = el("secondSoftReset");
var $resetLabel = el("resetLabel");
var $softReset = el("softReset");


function startAMBot() {
	intervals = [
		setInterval(clickinfinity, 1),
		setInterval(clickMaxAll, 1),
		setInterval(clickSingles, 1),
		setInterval(clickMaxes, 1),
		setInterval(clickReplicanti, 1),
		setInterval(function () {
			//var second_html = $secondResetLabel.innerHTML;
			var reset_html = $resetLabel.innerHTML;
			//if(second_html === "Antimatter Galaxies: requires 71 Eighth Dimensions") {
			//clickGalaxy();
			//}
			if(reset_html >= "Dimension Boost: requires 1000 Eighth Dimensions") {
				//if(second_html === "Antimatter Galaxies: requires 131 Eighth Dimensions" || second_html === "Antimatter Galaxies: requires 71 Eighth Dimensions") {
					clickBoost();
				//}
			}
		}, 1)
	];
}
	
function stopAMBot() {
	intervals.forEach(function (interval) { clearInterval(interval); });
}

var $replicantireset = el("replicantireset")
function clickReplicanti(){
	$replicantireset.click();
}

function clickMaxAll() {
	$maxall.click();
}

function clickGalaxy() {
	$secondSoftReset.click();
}

function clickBoost() {
	$softReset.click();
}

var $tickSpeed = el("tickSpeed");

function clickSingles() {
	$tickSpeed.click();
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
	$firstMax.className==="storebtn" && $firstMax.click();
	$seventhMax.className==="storebtn" && $seventhMax.click();
	$sixthMax.className==="storebtn" && $sixthMax.click();
	$fifthMax.className==="storebtn" && $fifthMax.click();
	$fourthMax.className==="storebtn" && $fourthMax.click();
	$thirdMax.className==="storebtn" && $thirdMax.click();
	$secondMax.className==="storebtn" && $secondMax.click();
}

var $bigcrunch = el("bigcrunch");

function clickinfinity() {
	$bigcrunch.style.display === "block" && $bigcrunch.click();
	$bigcrunch.click();
}

//var amBot = document.createElement('script');
//amBot.src = "https://raw.github.com/technodestructo/AMBot/am_bot.js";
//document.getElementsByTagName('head')[0].appendChild(amBot);