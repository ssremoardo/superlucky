import { Router } from 'express'
import { exportController } from '../Resources/Export'
import checkToken from "../Midleware/tokenJson";

const router = Router()

router.get('/api/v1/export', checkToken, exportController)

export default router