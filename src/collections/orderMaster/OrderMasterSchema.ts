import { CollectionConfig } from "payload/types";
import { QueueSchema } from "../queue/Queue";

export const OrderMasterSchema: CollectionConfig = {
    slug: 'order-master',
    fields: [
        {
            name: 'isTradeOrder',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'isPartiallyTradeOrder',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'isQueue',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'isCustomerOrder',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'deleted',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'isOrderPlaced',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'isProcessingByVendor',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'isShippedByVendor',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'isDeliveredToHub',
            type: 'checkbox',
            required: true,
            defaultValue: false,
        },
        {
            name: 'queues',
            type: 'relationship',
            relationTo: QueueSchema.slug,
            hasMany: true,
        }
    ]
}