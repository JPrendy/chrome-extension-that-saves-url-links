let changeColor = document.getElementById('changeColor');
let saveUrl = document.getElementById('saveUrl');
let saveUrl2 = document.getElementById('go');
let saveUrl3 = document.getElementById('clear');

saveUrl.onclick = function(element) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    var url = tabs[0].url;
    console.log(url);
    chrome.storage.sync.set({key: url}, function() {
        console.log('Value is set to ' + url);
    });
    });
};

saveUrl2.onclick = function(element) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    //set a number value each time and use that to retrieve what place you should be at
    chrome.storage.sync.get(['key'], function(result) {
        chrome.tabs.update(tabs.id, {url: result.key});
    });
    });
};

saveUrl3.onclick = function(element) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    //set a number value each time and use that to retrieve what place you should be at
    chrome.storage.sync.clear();
    });
};