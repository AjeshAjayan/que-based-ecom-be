import { RequestHandler } from "express";
import * as express from "express";
import { sendSMS } from "../../utils/sendSMS";
import payload from "payload";
import PublicUsers from "../../collections/PublicUsers/PublicUsersSchema";
import crypto from "crypto";

require('dotenv').config();

const senderPhoneNumberToSendOTP = process.env.TWILIO_ACCOUNT_PHONE_NUMBER;

export const sendOTPController: RequestHandler = async (req: express.Request, res: express.Response) => {
    try{
        const reviverPhoneNumber = process.env.PHONE_COUNTRY_CODE + req.body.phoneNumber;

        const otp = crypto.randomInt(1000, 10000);
        const PublicUsersModel = payload.db.collections[PublicUsers.slug];

        try {
            /**
             * save otp and phone number to db
            */
            await PublicUsersModel.create({phoneNumber: reviverPhoneNumber, otp, validated: false});
        } catch (e) {
            /**
             * 11000 is mongoDB error code for duplicate entry
             * Entry with duplicated phone number exists, but it is
             * crucial to check it existing entry completed registration and
             * OTP verification 
             */
            if(e.code === 11000) {
                const publicUser = await PublicUsersModel.findOne({phoneNumber: reviverPhoneNumber})
                    .exec();
                /**
                 * if not validated continue to sendOTP
                 * else throw error
                 */
                if(publicUser.validated === false) {
                    // execute nothing: the execution flow will go to sendSMS
                } else {
                    throw e;
                }
            } else {
                throw e;
            }
        }

        const SMSBody = `Hi, Greetings form noted! era. \n${otp} is you OTP. OTP is valid for 15 mins`;
        sendSMS(SMSBody, senderPhoneNumberToSendOTP, reviverPhoneNumber)

        res.status(200).json({ message: 'OTP sent' });
    } catch(err) {
        let message = 'Something went wrong';
        // 11000 is mongoDB error code for duplicate entry
        if(err.code === 11000) {
            message = 'Phone number already exists';
        }
        res.status(500).json({ error: err, message });
    }
}
