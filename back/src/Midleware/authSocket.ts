import { Middleware, MiddlewareInterface } from 'socket-controllers';
import { Request, Response } from 'express'
@Middleware()
export class CompressionMiddleware implements MiddlewareInterface {
    use(socket: any, next: (err?: any) => any) {

        next();
    }
}