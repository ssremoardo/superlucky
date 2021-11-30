import { Router } from 'express'
import { messageContactResources, sendMessageContactResources, sendMessageInLotContactResources } from '../Resources/Message'
import checkToken from "../Midleware/tokenJson";

const router = Router()

router.get('/api/v1/messages/:chatId', checkToken, messageContactResources)
router.post('/api/v1/messages', checkToken, sendMessageContactResources)
router.post('/api/v1/messagesInLot', checkToken, sendMessageInLotContactResources)

export default router