import { Router } from 'express'
import { remoteFilesResources } from '../Resources/RemoteFiles'
import checkToken from "../Midleware/tokenJson";

const router = Router()

router.get('/api/v1/files/:fileId', remoteFilesResources)

export default router