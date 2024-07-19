import { CollectionConfig } from "payload/types";

export const ProductImagesSchema: CollectionConfig = {
    slug: "productImages",
    access: {
        read: ({ req }) => {
            /**
             * is a public API
             */
            return true;
        }
    },
    upload: {
        // TODO: move to s3
        staticURL: '/media/products/images',
        staticDir: 'media/products/images',
        crop: true,
        // TODO: set images sizes for different devices. example, mobile, tablet, desktop
        // TODO: checkout resizeOptions in payload
    },
    fields: [
        {
            name: "altText",
            type: "text",
            label: "Alt Text",
        },
    ]
}
