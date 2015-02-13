var pixels = 0;

chrome.storage.sync.get("pixelScrolled", function(data) {
	if(chrome.runtime.lastError)
    {
        chrome.storage.sync.set({'pixelScrolled': 0});
		pixels = 0;
        return;
    }

	pixels = parseInt(data.pixelScrolled);
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  //console.log(message.method);
  // When we get a message from the content script
  if(message.method == 'addPixels') {
    pixels += message.pixels;
	chrome.storage.sync.set({'pixelScrolled': pixels});
  } else if(message.method == 'getPixels') {
    sendResponse(pixels);
  }
});
