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

changeColor.onclick = function(element) {
    // let color = element.target.value;
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // chrome.tabs.executeScript(
    //     tabs[0].id,
    //     {code: 'document.body.style.backgroundColor = "' + color + '";'});
    // });
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var result = url.substring(0, url.length-1);
        //console.log(result);
        var url2 = result.replace(/\d+$/, function(s) {
            return +s-1;
        });
        chrome.tabs.update(tabs.id, {url: url2});
    });
};

chrome.storage.sync.get('color', function(data) {
changeColor.style.backgroundColor = data.color;
changeColor.setAttribute('value', data.color);
});