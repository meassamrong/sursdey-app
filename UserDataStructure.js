// User chat Schema

const userChatModel = {
    msgSender: {
        type: "String",
        require: true
    },
    msgID: {
        type: "String",
        require: true
    },
    msgContent: {
        type: "String",
        require: true
    },
    msgReceiver: {
        type: "String",
        require: true
    }
}