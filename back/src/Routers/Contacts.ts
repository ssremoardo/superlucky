import { Router } from 'express'
import { contactsResources } from '../Resources/Contacts'
import checkToken from "../Midleware/tokenJson";

const router = Router()

router.get('/api/v1/contacts', checkToken, contactsResources)

export default router