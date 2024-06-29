import { RequestHandler } from "express";
import express from "express";
import { verifyToken } from "../utils/verifyToken";

const verifyTokenMiddleware: RequestHandler = (req: express.Request, res: express.Response) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const decodedToken = verifyToken(token);
        (req as any).user = decodedToken;
        console.log('user', decodedToken)
        req.next();
    } catch (err) {
        // mostly when the token is invalid
        res.status(401).json({ error: err.message });
    }
}