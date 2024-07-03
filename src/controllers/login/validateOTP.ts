import { RequestHandler } from "express";
import * as express from "express";
import PublicUsersSchema from "../../collections/publicUsers/PublicUsersSchema";
import payload from "payload";
import { generateJWTToken } from "../../utils/generateJWTToken";

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
        } else if (publicUser.isBlocked) {
            res.status(401).json(
                {
                    message: "User has been blocked",
                    data: { reasonForBlock: publicUser.reasonForBlock }
                }
            )
        } else if (publicUser.otp === otp) {
            const publicUser = await PublicUsersModel.findOne({ phoneNumber }).exec();
            if (publicUser.validated) {
                const { token, parsedPublicUser } = getParsedToken(publicUser)
                res.status(200).json({
                    message: "Already validated", data: {
                        ...parsedPublicUser,
                        token
                    }
                });
            } else {
                /**
                 * Generate token and send success response
                 */
                const { token, parsedPublicUser } = getParsedToken(publicUser)
                const updatePublicUsersModel = PublicUsersModel.findOneAndUpdate({ phoneNumber }, { validated: true }, { new: true });
                await updatePublicUsersModel.exec();
                res.status(200).json({
                    message: 'OTP is valid', data: {
                        ...parsedPublicUser, token
                    }
                });
            }
        } else {
            res.status(200).json({ message: 'OTP is invalid' });
        }
    } catch (err) {
        res.status(500).json({ error: err, message: 'Something went wrong' });
    }
}

function getParsedToken(publicUser: any) {
    /**
     * Generate token and send success response
     */
    const parsedPublicUser = JSON.parse(JSON.stringify(publicUser));
    delete parsedPublicUser.otp;
    delete parsedPublicUser.__v;
    const token = generateJWTToken(parsedPublicUser);

    return { token, parsedPublicUser };
}
