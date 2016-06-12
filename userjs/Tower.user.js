// ==UserScript==
// @name         Tower Markdown Full-size UI
// @namespace    http://oriovo.com
// @version      0.1
// @description   Tower Markdown Full-size UI
// @author       Micle Bu
// @match        *.tower.im/projects/*/docs/*
// @grant        none
// @update        2016.06.12

// @require		

// ==/UserScript==

var intervalMain;
var intervalMessage;

jQuery(function() {
    intervalMain = setInterval(checkLoad, 1000);   
    intervalMessage = setInterval(checkMessage, 1000);  
});

function checkLoad() {    
    var width = $('.wrapper').width();
    console.log(width);
    
    if (width != null && width > 0) {
        setFullscreen();
        clearInterval(intervalMain);
    }
}


function checkMessage() {    
    setMessageBubble();
}

/**
 * Set full screen
 */
function setFullscreen() {    
    var main = $('.wrapper');
    var body = $('#body');
    
    if (main != null) {
        main.css('width', '100%');
        $('.container').css('width', '100%');
        $('.form-edit-doc').css('width', '100%');
        $('.form-edit-doc .doc-title').css('width', '100%');
        $('.mdeditor-toolbar').css('width', '100%');
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
