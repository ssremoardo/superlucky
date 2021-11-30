import { telegram } from '../Services/Auth'
import { Response, Request } from 'express'

async function getRemoteFiles(req: Request, res: Response, next) {
    const { fileId } = req.params

    await telegram.api.getFile({ fileId }).then((response) => {

        res.json({
            data: response,
            error: false
        })

        next()
    }).catch((error) => {
        res.json({
            data: error,
            error: true
        })
        next()
    })
}



export { getRemoteFiles }


