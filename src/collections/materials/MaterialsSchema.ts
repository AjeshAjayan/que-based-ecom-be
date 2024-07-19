import { CollectionConfig } from "payload/types";

export const MaterialsSchema: CollectionConfig = {
    slug:'materials',
    access: {
        read: ({ req }) => {
            /**
             * is a public API
             */
            return true;
        }
    },
    admin: {
        useAsTitle: 'name'
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
        },
    ]
}
