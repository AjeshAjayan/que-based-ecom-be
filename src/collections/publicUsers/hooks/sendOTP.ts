import { CollectionBeforeChangeHook } from "payload/types";
import { PublicUser } from "../type/PublicUser";

export const sendOTP: CollectionBeforeChangeHook<PublicUser> = async ({
    data,
}) => {
    // code to send otp
    return data;
}
