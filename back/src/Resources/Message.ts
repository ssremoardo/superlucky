import { getMessageContact, sendMessageContact, sendMessageInLotContact  } from '../Services/Message'

async function messageContactResources(req, res, next) {
    await getMessageContact(req, res, next)
}

async function sendMessageContactResources(req, res, next) {
    await sendMessageContact(req, res, next)
}

async function sendMessageInLotContactResources(req, res, next) {
    await sendMessageInLotContact(req, res, next)
}

export { messageContactResources, sendMessageContactResources, sendMessageInLotContactResources }