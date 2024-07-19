import { CollectionConfig } from "payload/types";

export const ProductVideosSchema: CollectionConfig = {
    slug: 'productVideos',
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
        staticURL: '/media/products/videos',
        staticDir: 'media/products/videos',
        crop: true,
    },
    fields: []
}