// ==UserScript==
// @name        ZoLib
// @namespace   The first zombs.io script library
// @match       http://zombs.io/
// @grant       none
// @version     beta
// @author      -
// @description the first zombs.io library
// ==/UserScript==

class addChatListner {
    constructor(func, msg, allowedUsers = localStorage.getItem('displayName')) {
        game.network.addRpcHandler("ReceiveChatMessage", (message) => {
            if (message.message == msg) {
                if (allowedUsers == "*") {
                    func
                } else if (allowedUsers == localStorage.getItem('displayName') && message.displayName == localStorage.getItem('displayName')) {
                    func
                }
            }
        })
    }
}
