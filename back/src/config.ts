import "reflect-metadata";
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import body from 'body-parser'
import router from './routers'
//import messages from './MethodsSocket/message'
import { createConnection } from "typeorm";
require("dotenv").config();

const app = express()
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});
app.use(cors())
app.use(morgan('dev'))
app.use(body())
app.use(router)
//app.use(messages)
app.use(expressSession);
createConnection();

export default app