import { RequestHandler } from "express";
import express from "express";
import { verifyToken } from "../utils/verifyToken";

export const verifyTokenMiddleware: RequestHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if ((req as any).MiddlewareSlug = 'auth') {
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];
            const decodedToken = verifyToken(token);
            (req as any).user = decodedToken;
            next();
        } catch (err) {
            // catch execute mostly when the token is invalid
            res.status(401).json({ error: err.message });
        }
    } else {
        next();
    }
}