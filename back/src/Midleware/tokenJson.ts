import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

function verifyJWT(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["token-access"];
    if (!token)
        return res.status(401).send({ auth: false, message: "Por favor passe o token de autenticação." });

    //@ts-ignore
    jwt.verify(token.toString(), process.env.jwtToken, function (err, decoded) {
        if (err)
            return res
                .status(500)
                .send({ auth: false, message: "Failed to authenticate token." });
        // se tudo estiver ok, salva no request para uso posterior
        //@ts-ignore
        req.userId = decoded.id;
        next();
    });
}

export default verifyJWT;
