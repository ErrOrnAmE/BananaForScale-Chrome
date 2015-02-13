
var bRate = 1337;

var gbnn = 0;
var mbnn = 0;
var kbnn = 0;
var bnn = 0;

function showBananas() {
	document.getElementById("bnn").innerHTML = bnn;

	if ( gbnn == 0 && mbnn == 0 && kbnn == 0 )
		return;

	document.getElementById("list").children[2].style.display = "list-item";
  document.getElementById("kbnn").innerHTML = kbnn;

	if ( gbnn == 0 && mbnn == 0 )
		return;

	document.getElementById("list").children[1].style.display = "list-item";
  document.getElementById("mbnn").innerHTML = mbnn;

	if ( gbnn == 0 )
		return;

	document.getElementById("list").children[0].style.display = "list-item";
  document.getElementById("gbnn").innerHTML = gbnn;
}

chrome.runtime.sendMessage({'method':'getPixels'},function(response){
  //response is now the info collected by the content script.
  //document.getElementById("bnn").innerHTML = response;

  var bananas = Math.round((response/bRate) * 100) / 100;
	
	gbnn = Math.floor(bananas / 1000000000);
	mbnn = Math.floor(bananas / 1000000) % 1000;
	kbnn = Math.floor(bananas / 1000) % 1000;
	bnn = Math.floor((bananas % 1000) * 100) / 100;
	showBananas();
});

document.addEventListener('DOMContentLoaded', function() {

	// I guess I wanted to say "Link" but did a mistake
	document.getElementById("zelda").addEventListener("click", function (event) {
		chrome.tabs.create({ url: "http://9gag.com" });
	});

	document.getElementById("dev").addEventListener("click", function (event) {
		chrome.tabs.create({ url: "http://thibaudcourtoison.fr" });
	});

	document.getElementById("github").addEventListener("click", function (event) {
		chrome.tabs.create({ url: "https://github.com/ErrOrnAmE/BananaForScale-Chrome" });
	});
});




