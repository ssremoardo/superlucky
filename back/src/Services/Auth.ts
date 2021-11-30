import { Request, Response } from 'express'
const { Auth, Airgram, toObject } = require('airgram')
import { getRepository } from "typeorm";
import { UPDATE, AUTHORIZATION_STATE } from '@airgram/api'
import { message as eventMessage } from '../Socket/Events/message'
import Users from "../Entity/Users";
import { updateMessage } from '../Socket/Events/telegram'
import { io } from '../Socket'

let telegram = null;
async function authService(req: Request, res: Response) {
    const { code, phone } = req.body
    try {
        telegram = new Airgram({
            apiId: process.env.APP_ID,
            apiHash: process.env.APP_HASH,
            command: process.env.TDLIB_COMMAND,
            databaseDirectory: process.env.TDLIB_DB,
            UseFileDatabase: true,
            UseChatInfoDatabase: true,
            logVerbosityLevel: 2
        })

        telegram.use(new Auth({
            code: () => code,
            phoneNumber: () => phone
        }))


        void (async function () {
            const { response: users } = await telegram.api.getMe()
            const usersAll = await getRepository(Users).find()

            usersAll.map(async (user) => {
                if (!user) return
                await getRepository(Users).update(user.id, { userIdTelegram: users.id })
            })
            res.status(200).json({
                data: users,
                error: false
            });
        })()

        // Getting all updates
        telegram.use((ctx, next) => {
            if ('update' in ctx) {

            }
            return next()
        })

        if (telegram) {

            telegram.on(updateMessage, ({ update }) => {
                io.emit(eventMessage, { message: update.message })
            })
        }
        // Getting new messages
        /*  telegram.on('updateNewMessage', async ({ update }) => {
             const { message } = update
             res.status(200).json({
                 data: message,
                 error: false
             });
         })
  */
    } catch (error) {
        res.json({
            data: error,
            error: true
        })
    }
}

async function newService(req, res, next) {
    const { phoneNumber } = req.body
    await telegram.api.setAuthenticationPhoneNumber({
        phoneNumber,
        settings: {
            _: "phoneNumberAuthenticationSettings",
            isCurrentPhoneNumber: true,
            allowSmsRetrieverApi: true
        }
    }).then((data) => {
        res.json({
            data,
            error: false
        })
    }).catch(() => {
        res.json({
            data: 'Error created service',
            error: true
        })
    })
    next()
}

export { authService, newService, telegram }