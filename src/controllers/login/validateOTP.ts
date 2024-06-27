import { RequestHandler } from "express";
import * as express from "express";
import PublicUsersSchema from "../../collections/PublicUsers/PublicUsersSchema";
import payload from "payload";

export const validateOTPController: RequestHandler = async (req: express.Request, res: express.Response) => {
    try{
        const otp = req.body.otp;
        const phoneNumber = process.env.PHONE_COUNTRY_CODE + req.body.phoneNumber;

        // code to validate otp
        const PublicUsersModel = payload.db.collections[PublicUsersSchema.slug]
        const publicUsers = await PublicUsersModel.findOne({ phoneNumber }).exec();

        if(!publicUsers) {
            // Phone number is not registered
            res.status(404).json({ message: 'Who are you' });
        }

        if(publicUsers.otp === otp) {
            const updatePublicUsersModel = PublicUsersModel.findOneAndUpdate({ phoneNumber }, { validated: true})
            const updatedPublicUser = await updatePublicUsersModel.exec();
            if(updatedPublicUser.validated) {
                res.status(200).json({ message: "Already validated" });
            } else {
                res.status(200).json({ message: 'OTP is valid', data: updatedPublicUser});
            }
        } else {
            res.status(200).json({ message: 'OTP is invalid' });
        }

    } catch(err) {
        res.status(500).json({ error: err, message: 'Something went wrong' });
    }

}
