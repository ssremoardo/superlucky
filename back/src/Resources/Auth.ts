import { Request, Response } from 'express'
import { authService } from '../Services/Auth'

async function authResources(req: Request, res: Response) {
    await authService(req, res)
}

export { authResources }