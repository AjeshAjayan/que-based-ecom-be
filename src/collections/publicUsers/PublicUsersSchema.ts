import { CollectionConfig } from "payload/types";
import { validatePhoneNumber } from "./validate/validatePhoneNumber";
import { validateFirstName, validateLastName } from "./validate/validateName";

const PublicUsersSchema: CollectionConfig = {
    slug: 'publicUsers',
    admin: {
        useAsTitle: "firstName"
    },
    fields: [
        {
            name: 'phoneNumber',
            type: 'number',
            label: 'Phone Number',
            unique: true,
            required: true,
            validate: validatePhoneNumber,
        },
        {
            name: 'firstName',
            type:'text',
            label: 'First Name',
            validate: validateFirstName,
            required: true,
        },
        {
            name: 'lastName',
            type:'text',
            label: 'Last Name',
            validate: validateLastName,
            required: true,
        },
        {
            name: 'email',
            type:'email',
            label: 'Email',
        },
        {
            name: 'otp',
            type:'text',
            label: 'OTP',
        },
        {
            name: 'otpExpiry',
            type:'text',
            label: 'OTP Expiry',
        },
        {
            name: 'validated',
            type:'checkbox',
            label: 'Validated',
            defaultValue: false,
        },
        {
            name: 'isBlocked',
            type:'checkbox',
            label: 'Blocked',
            defaultValue: false,
        },
        {
            name: 'reasonForBlock',
            type:'textarea',
            label: 'Reason For Block',
        }
    ],
}

export default PublicUsersSchema;
