let changeColor = document.getElementById('changeColor');
let saveUrl = document.getElementById('saveUrl');
let saveUrl2 = document.getElementById('go');
let saveUrl3 = document.getElementById('clear');

saveUrl.onclick = function(element) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    var url = tabs[0].url;
    console.log(url);
    if(number > 9){

    }
    else {
    number += 1;
    chrome.storage.sync.set({[ "key" + number ]: url, keyNumber: number}, function() {
        console.log('Value is set to ' + url);
    });
    console.log('Value is set to ' + [ "key" + number ]);
    var h = document.createElement("h6");
    var linkText = document.createTextNode(url);
    h.append(linkText);
    document.getElementById('savedUrl').append(h);
}
    });
};

saveUrl2.onclick = function(element) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    //set a number value each time and use that to retrieve what place you should be at
    urlOrder+=1;

    if(urlOrder > number){
        urlOrder =1;
    }
    for(i=0; i<number+1; i++){
    if(urlOrder == i){
        chrome.storage.sync.get(["key" + urlOrder], function(result) {
            chrome.tabs.update(tabs.id, {url: result["key" + urlOrder]});
        });
    }
    }
    chrome.storage.sync.set({checkUrl: urlOrder}, function() {
        console.log('Value is set to ' + urlOrder);
    });
    var list = document.getElementById('savedUrl');
    while (list.hasChildNodes()) {  
        list.removeChild(list.firstChild);
    }
    });
    for(i=0;i<number+1;i++){
    okay(i)
    }
};

saveUrl3.onclick = function(element) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

    //set a number value each time and use that to retrieve what place you should be at
    chrome.storage.sync.clear();
    number =0;
    urlOrder = 0;
    var list = document.getElementById('savedUrl');
    while (list.hasChildNodes()) {  
        list.removeChild(list.firstChild);
    }
    });
};




//Get back to this later
var number = chrome.storage.sync.get(['keyNumber'], function(result) {
    if(result.keyNumber != undefined){
    return number = result.keyNumber;
    } else {
    return number = 0;
    }
});
var urlOrder = chrome.storage.sync.get(['checkUrl'], function(result) {
    if(result.checkUrl != undefined){
    return urlOrder = result.checkUrl;
    } else {
    return urlOrder = 0;
    }
});
for(i=0;i<10;i++){
    okay(i)
}
function okay(i){
chrome.storage.sync.get(['key' + i], function(result) {
    var test = result['key' + i];
    if(test != undefined){
    var h = document.createElement("h6");
    var linkText = document.createTextNode(test);
    if(urlOrder == i){
        h.style.color = "blue"
    }
    h.append(linkText);
    document.getElementById('savedUrl').append(h);
    }
});
}

chrome.storage.sync.set({keyNumber: number}, function() {
    console.log('Value is set to ' + number);
});
chrome.storage.sync.set({checkUrl: urlOrder}, function() {
    console.log('Value is set to ' + urlOrder);
});