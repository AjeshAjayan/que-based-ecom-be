import { CollectionConfig } from "payload/types";
import { ProductsSchema } from "../Products/ProductsSchema";
import PublicUsersSchema from "../publicUsers/PublicUsersSchema";

export const QueueSchema: CollectionConfig = {
    slug: "queue",
    fields: [
        {
            name: 'product',
            type: 'relationship',
            relationTo: ProductsSchema.slug,
            required: true,
        },
        {
            name: 'participants',
            type: 'relationship',
            required: true,
            relationTo: PublicUsersSchema.slug,
            hasMany: true,
        }
    ]
}
