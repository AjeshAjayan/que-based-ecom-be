import { CollectionConfig } from "payload/types";

export const ProductVideosSchema: CollectionConfig = {
    slug: 'productVideos',
    upload: {
        // TODO: move to s3
        staticURL: '/media/products/videos',
        staticDir: 'media/products/videos',
    },
    fields: []
}