import { CollectionConfig } from "payload/types";
import { CategoriesSchema } from "../categories/CategoriesSchema";

export const SubCategoriesSchema: CollectionConfig = {
    slug: 'subCategories',
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
            unique: true,
        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: CategoriesSchema.slug,
            label: 'Category',
            required: true,
        },
        {
            name: 'description',
            type: 'richText',
            label: 'Description',
        },
    ],
}
