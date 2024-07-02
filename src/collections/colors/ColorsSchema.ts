import { CollectionConfig } from "payload/types";

export const ColorsSchema: CollectionConfig = {
    slug: 'colors',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Name',
        },
        {
            name: 'hexCode',
            type: 'text',
            required: true,
            label: 'Hex Code',
        }
    ]
}
