require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export const sendSMS = (body: string, from: string, to: string) => {
    return new Promise((resolve, reject) => {
        client.messages
        .create({ body, from, to })
        .then(message => {
            resolve(message);
        }).catch(err => { 
            reject(err)
        });
    })
}
