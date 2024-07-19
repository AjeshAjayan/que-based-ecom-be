import { CollectionConfig } from "payload/types";

export const SizesSchema: CollectionConfig = {
    slug:'sizes',
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
            label: 'Name',
            required: true,
        },
        {
            name: 'description',
            type: 'richText',
            label: 'Description',
        }
    ]
}