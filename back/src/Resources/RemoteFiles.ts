import { getRemoteFiles } from '../Services/RemoteFiles'

async function remoteFilesResources(req, res, next) {
    await getRemoteFiles(req, res, next)
}

export { remoteFilesResources }