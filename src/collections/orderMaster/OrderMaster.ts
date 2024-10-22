import { CollectionConfig } from "payload/types";
import { QueueSchema } from "../queue/Queue";

export const OrderMasterSchema: CollectionConfig = {
    slug: 'order-master',
    fields: [
        {
            name: 'isTradeOrder',
            type: 'checkbox',
            required: true,
        },
        {
            name: 'isPartiallyTradeOrder',
            type: 'checkbox',
            required: true,
        },
        {
            name: 'isQueue',
            type: 'checkbox',
            required: true,
        },
        {
            name: 'isCustomerOrder',
            type: 'checkbox',
            required: true,
        },
        {
            name: 'deleted',
            type: 'checkbox',
            required: true,
        },
        {
            name: 'isOrderPlaced',
            type: 'checkbox',
            required: true,
        },
        {
            name: 'isProcessingByVendor',
            type: 'checkbox',
            required: true,
        },
        {
            name: 'isShippedByVendor',
            type: 'checkbox',
            required: true,
        },
        {
            name: 'isDeliveredToHub',
            type: 'checkbox',
            required: true,
        },
        {
            name: 'queues',
            type: 'relationship',
            relationTo: QueueSchema.slug,
            hasMany: true,
        }
    ]
}