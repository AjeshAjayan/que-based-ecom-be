import { CollectionConfig } from "payload/types";

export const SizesSchema: CollectionConfig = {
    slug:'sizes',
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
        }
    ]
}