import { Router } from 'express'
import { authResources } from '../Resources/Auth'
import checkToken from "../Midleware/tokenJson";

const router = Router()

router.post('/api/v1/auth/telegram', authResources)

export default router