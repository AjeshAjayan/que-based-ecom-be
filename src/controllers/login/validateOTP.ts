import { RequestHandler } from "express";
import * as express from "express";
import PublicUsersSchema from "../../collections/publicUsers/PublicUsersSchema";
import payload from "payload";

export const validateOTPController: RequestHandler = async (req: express.Request, res: express.Response) => {
    try {
        const otp = req.body.otp;
        const phoneNumber = process.env.PHONE_COUNTRY_CODE + req.body.phoneNumber;

        // code to validate otp
        const PublicUsersModel = payload.db.collections[PublicUsersSchema.slug]
        const publicUser = await PublicUsersModel.findOne({ phoneNumber }).exec();

        if (!publicUser) {
            // Phone number is not registered
            res.status(404).json({ message: 'User not found' });
        } else if (publicUser.otp === otp) {
            const publicUser = await PublicUsersModel.findOne({ phoneNumber }).exec();
            if (publicUser.validated) {
                if (publicUser.isBlocked) {
                    res.status(401).json(
                        {
                            message: "User has been blocked",
                            data: { reasonForBlock: publicUser.reasonForBlock }
                        }
                    )
                } else {
                    res.status(200).json({ message: "Already validated" });
                }
            } else {
                const updatePublicUsersModel = PublicUsersModel.findOneAndUpdate({ phoneNumber }, { validated: true })
                const updatedPublicUser = await updatePublicUsersModel.exec();
                res.status(200).json({ message: 'OTP is valid', data: updatedPublicUser });
            }
        } else {
            res.status(200).json({ message: 'OTP is invalid' });
        }

    } catch (err) {
        res.status(500).json({ error: err, message: 'Something went wrong' });
    }
}
