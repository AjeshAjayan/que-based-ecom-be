import { CollectionConfig } from "payload/types";
import { OrderChildSchema } from "../orderChild/OrderChildSchema";
import PublicUsersSchema from "../publicUsers/PublicUsersSchema";

export const PaymentsSchema: CollectionConfig = {
    slug: 'payments',
    fields: [
        {
            name: 'paymentType',
            type:'select',
            options: [
                { label: 'Credit Card', value: 'creditCard' },
                { label: 'UPI', value: 'upi' },
            ],
        },
        {
            name: 'paymentStatus',
            type:'select',
            options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Completed', value: 'completed' },
                { label: 'Failed', value: 'failed' },
            ],
            required: true,
            defaultValue: 'pending',
        },
        {
            name: 'transactionId',
            type: 'text',
        },
        {
            name: 'publicUser',
            type: 'relationship',
            required: true,
            relationTo: PublicUsersSchema.slug
        },
    ]
}
