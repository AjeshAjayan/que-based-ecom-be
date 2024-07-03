import { RequestHandler } from "express";
import * as express from "express";
import payload from "payload";
import PublicUsersSchema from "../../collections/publicUsers/PublicUsersSchema";
import { generateJWTToken } from "../../utils/generateJWTToken";

export const registrationController: RequestHandler = async (req: express.Request, res: express.Response) => {
    try {


        const phoneNumber = process.env.PHONE_COUNTRY_CODE + req.body.phoneNumber;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;

        const PublicUsersModel = payload.db.collections[PublicUsersSchema.slug];
        const updatedPublicUser = await PublicUsersModel.findOneAndUpdate(
            { phoneNumber },
            { firstName, lastName, email }
        ).exec()


        /**
         * if the user not exists in the database
         * send 404; 
         * else check if the user already validated
         */
        if (!updatedPublicUser) {
            res.status(404).json({ message: 'User not found' });
        } else if (updatedPublicUser.isBlocked) {
            res.status(401).json(
                { message: "User has been blocked", data: { reasonForBlock: updatedPublicUser.reasonForBlock } }
            )
        } else {
            /**
             * check if OTP is validated, if validated then send 201
             * else OTP is not validated
            */
            if (updatedPublicUser.validated === true) {
                const parsedPublicUser = JSON.parse(JSON.stringify(updatedPublicUser));
                delete parsedPublicUser.otp;
                delete parsedPublicUser.__v
                const token = generateJWTToken(parsedPublicUser)

                res.status(201).json(
                    {
                        message: "Created successfully",
                        data: {
                            ...parsedPublicUser,
                            token
                        }
                    }
                )
            } else {
                res.status(401).json({ message: "OTP is not validated" });
            }
        }
    } catch (err) {
        res.status(500).json({ error: err, message: "Something went wrong" })
    }
}
