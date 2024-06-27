import { RequestHandler } from "express";
import express from "express";
import payload from "payload";
import PublicUsers from "../../collections/PublicUsers/PublicUsersSchema";

export const loginController: RequestHandler = async (req: express.Request, res: express.Response) => {
    try {
        const publicUsersModel = payload.db.collections[PublicUsers.slug];
        const publicUsers = await publicUsersModel.find({}).exec()
        res.json({ data: publicUsers });
    } catch (err) {
        res.status(500).json({ error: err, message: 'Something went wrong' });
    }
}
