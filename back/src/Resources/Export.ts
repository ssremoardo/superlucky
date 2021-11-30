import { Response, Request } from "express";

import { exportApartment } from '../Export/Apartment'


function exportController(req: Request, res: Response, next) {
    return exportApartment(req, res, next);
}

export { exportController }