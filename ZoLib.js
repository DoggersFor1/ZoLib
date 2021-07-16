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