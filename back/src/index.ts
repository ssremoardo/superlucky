import app from './config'
import { httpServer as server } from './Socket/index'

server.listen(Number(process.env.SOCKETPORT))

app.listen(process.env.PORT, () => {
    console.log('Server runnig...')
})
