import { Router } from "express"

import Auth from './Routers/Auth'
import Contacts from './Routers/Contacts'
import Messages from './Routers/Messages'
import RoutersUser from "./Routers/Users";
import Blocos from './Routers/Bloco'
import Apartment from './Routers/Apartment'
import Export from './Routers/Export'
import Files from './Routers/RemoteFiles'


const router = Router();

router.get("/", (req, res) => res.send("Api running..."));
router.use(
    Auth,
    Contacts,
    Messages,
    RoutersUser,
    Blocos,
    Apartment,
    Export,
    Files
)

export default router;
