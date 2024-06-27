import { CollectionConfig } from "payload/types";
import { validatePhoneNumber } from "./validate/validatePhoneNumber";
import { sendOTP } from "./hooks/sendOTP";
import { validateFirstName, validateLastName } from "./validate/validateName";

const PublicUsers: CollectionConfig = {
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
            saveToJWT: true,
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
        }
    ],
}

export default PublicUsers;
