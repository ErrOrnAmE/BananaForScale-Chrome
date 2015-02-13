var deltaTop = 0;

// Catching each pixel scrolled
window.onscroll = function()
{
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

	// Scrolling to the top is not considered a valid scroll
	var d = (scrollTop - deltaTop) > 0 ? scrollTop - deltaTop : 0;
	deltaTop = scrollTop;
     
	//console.log(d);
	chrome.runtime.sendMessage({'method':'addPixels','pixels':d});
	/*chrome.storage.sync.get('pixelScrolled', function(object items) {
		chrome.storage.sync.set({'pixelScrolled': d});
	});*/

	//chrome.storage.sync.set({'pixelScrolled': d});
}
