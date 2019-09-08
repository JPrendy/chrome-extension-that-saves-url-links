chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#323639'}, function() {
    console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
        //pageUrl: {hostContains: 'aib'},
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});