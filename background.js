chrome.browserAction.onClicked.addListener(function(tab) { 
    chrome.tabs.create({ url: "https://calendar.google.com" });
});
