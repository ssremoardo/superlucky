import { Response, Request } from 'express'
const { toObject } = require('airgram')
import { telegram } from '../Services/Auth'
import socket from '../Socket/Messages'

async function getMessageContact(req: Request, res: Response, next) {
    const { chatId } = req.params

    await telegram.api.getChatHistory({ chatId, limit: 15, offset: 0, onlyLocal: true }).then((response) => {
        res.json({
            data: response,
            error: false
        })

        socket.emit('newMessage', response)
        next()
    }).catch((error) => {
        res.json({
            data: error,
            error: true
        })
        next()
    })
}

async function sendMessageContact(req: Request, res: Response, next) {
    const { chatId, text } = req.body
    try {

        await telegram.api.sendMessage({
            chatId: Number(chatId),
            messageThreadId: 0,
            MessageSendOptionsInputUnion: {
                _: "messageSendOptions",
                disableNotification: false,
                fromBackground: false,
                schedulingState: {
                    _: "messageSchedulingStateSendWhenOnline"
                }
            },
            inputMessageContent: { _: 'inputMessageText', text: { text } }
        }).then((response) => {
            res.json({
                data: response,
                error: false
            })
        })
        next()

    } catch (error) {
        res.json({
            data: error,
            error: true
        })
    }
}

async function sendMessageInLotContact(req: Request, res: Response, next) {
    const { text } = req.body
    try {
        await telegram.api.getContacts().then(toObject).then(async (contacts) => {
            let ids = contacts.userIds;

            for (let index = 0; index < ids.length; index++) {
                await telegram.api.getChat({ chatId: ids[index] }).then((chats) => {
                    if (chats.response['_'] === "chat") {
                        telegram.api.sendMessage({
                            chatId: ids[index],
                            messageThreadId: 0,
                            MessageSendOptionsInputUnion: {
                                _: "messageSendOptions",
                                disableNotification: false,
                                fromBackground: false,
                                schedulingState: {
                                    _: "messageSchedulingStateSendWhenOnline"
                                }
                            },
                            inputMessageContent: { _: 'inputMessageText', text: { text } }
                        }).then((response) => {
                            res.json({
                                data: response,
                                error: false
                            })
                        })
                    }
                    next()
                })
            }
        })
    } catch (error) {
        res.json({
            data: error,
            error: true
        })
    }

}

export { getMessageContact, sendMessageContact, sendMessageInLotContact }