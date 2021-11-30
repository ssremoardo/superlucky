import { Response, Request } from "express";

import { index, store, destroy, update } from "../Services/Bloco";


function indexController(req: Request, res: Response) {
    return index(req, res);
}
function storeController(req: Request, res: Response) {
    return store(req, res);
}
function updateController(req: Request, res: Response) {
    return update(req, res);
}
function destroyController(req: Request, res: Response) {
    return destroy(req, res);
}

export {
    indexController,
    storeController,
    updateController,
    destroyController,
};
