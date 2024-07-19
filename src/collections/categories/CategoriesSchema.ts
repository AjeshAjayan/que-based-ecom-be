import { CollectionConfig } from "payload/types";

export const CategoriesSchema: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'name'
    },
    access: {
        read: ({ req }) => {
            /**
             * is a public API
             */
            return true;
        }
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'description',
            type: 'richText',
        },
    ],
}