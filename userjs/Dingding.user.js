// ==UserScript==
// @name         Dingding full-size UI
// @namespace    http://oriovo.com
// @version      0.1
// @description   Dingding wide UI
// @author       Micle Bu
// @match        *.dingtalk.com/*
// @grant        none
// @update        2016.03.14

// @require		

// ==/UserScript==

var intervalMain;
var intervalMessage;

jQuery(function() {
    intervalMain = setInterval(checkLoad, 1000);   
    intervalMessage = setInterval(checkMessage, 1000);  
});

function checkLoad() {    
    var width = $('#layout-main').width();
    console.log(width);
    
    if (width != null && width > 0) {
        setFullscreen();
        clearInterval(intervalMain);
    }
}


function checkMessage() {    
    var max = $('.msg-bubble').css('max-width');
    
    if (max == '300px') {
        setMessageBubble();
        //clearInterval(intervalMessage);
    }
}

/**
 * Set full screen
 */
function setFullscreen() {    
    var main = $('#layout-main');
    var body = $('#body');
    
    if (main != null) {
        main.css('width', '100%');
        main.css('height', '100%');
        main.css('top', '0');
        main.css('margin-left', '-50%');
        main.css('margin-top', '0');

        body.css('height', '95%');     
        
        
    } 
}

/**
 * Set message bubble width
 */
function setMessageBubble() {
    //var me = $('.conv-detail-pannel').find('.content-pannel-body').find('.chat-item.me').find('.msg-bubble-area').find('.msg-bubble');
    //$('.conv-detail-pannel').find('.content-pannel-body').find('.chat-item.me').find('.msg-bubble-area').find('.msg-bubble').css('max-width', 'none');
    //$('.conv-detail-pannel').find('.content-pannel-body').find('.chat-item.not-me').find('.msg-bubble-area').find('.msg-bubble').css('max-width', 'none');
    $('.msg-bubble').css('max-width', 'none');
}