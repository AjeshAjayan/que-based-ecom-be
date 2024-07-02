import { CollectionConfig } from "payload/types";

export const MaterialsSchema: CollectionConfig = {
    slug:'materials',
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
        {
            name: 'quality',
            type: 'text',
            required: true,
            label: 'Quality',
        }
    ]
}
