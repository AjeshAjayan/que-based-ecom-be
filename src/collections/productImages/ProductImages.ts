import { CollectionConfig } from "payload/types";

export const ProductImagesSchema: CollectionConfig = {
    slug: "productImages",
    upload: {
        // TODO: move to s3
        staticURL: '/media/products/images',
        staticDir: 'media/products/images',
    },
    fields: [
        {
            name: "altText",
            type: "text",
            label: "Alt Text",
        },
    ]
}
