import { CollectionConfig } from "payload/types";
import { MaterialsSchema } from "../materials/MaterialsSchema";
import { ColorsSchema } from "../colors/ColorsSchema";
import { SizesSchema } from "../sizes/SizesSchema";
import { SubCategoriesSchema } from "../subCategories/subCategoriesSchema";

export const ProductsSchema: CollectionConfig = {
    slug: "products",
    admin: {
        useAsTitle: 'title'
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
            type: "row",
            fields: [
                {
                    name: "title",
                    type: "text",
                    label: "Title",
                    required: true,
                    unique: true
                },
                {
                    name: "price",
                    type: "number",
                    label: "Price",
                    required: true,
                },
                {
                    name: 'moq',
                    required: true,
                    type: 'number',
                    label: 'MOQ'
                },
            ]
        },
        {
            name: 'imagesAndVideos',
            label: 'Images and videos',
            type: 'array',
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'image',
                            type: 'upload',
                            relationTo: 'productImages',
                        },
                        {
                            name: 'videos',
                            type: 'upload',
                            relationTo: 'productVideos',
                        },
                    ]
                }
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    name: "subCategory",
                    type: "relationship",
                    label: "Sub Category",
                    relationTo: SubCategoriesSchema.slug,
                    required: true,
                    hasMany: true,
                },
                {
                    name: 'expiryDate',
                    type: 'date',
                    label: 'Expiry Date',
                },
                {
                    name: 'productAddedDate',
                    type: 'date',
                    label: 'Product Added Date',
                }
            ]
        },
        {
            name: 'variants',
            type: 'array',
            label: {
                singular: 'Variant',
                plural: 'Variants',
            },
            admin: {
                initCollapsed: true,
            },
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: "size",
                            type: "relationship",
                            label: "Size",
                            required: true,
                            relationTo: SizesSchema.slug
                        },
                        {
                            name: "quantity",
                            type: "number",
                            label: "Quantity",
                            required: true,
                        },
                        {
                            name: "color",
                            type: "relationship",
                            label: "Color",
                            relationTo: ColorsSchema.slug,
                            hasMany: true,
                        },
                        {
                            name: 'colorTextToDisplay',
                            type: 'text',
                            label: 'Color Text To Display',
                        },
                        {
                            name: "material",
                            type: "relationship",
                            label: "Material",
                            relationTo: MaterialsSchema.slug,
                            hasMany: true,
                        },
                    ],
                },
                {
                    name: 'imagesAndVideos',
                    label: 'Images and videos',
                    type: 'array',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'image',
                                    type: 'upload',
                                    relationTo: 'productImages',
                                },
                                {
                                    name: 'videos',
                                    type: 'upload',
                                    relationTo: 'productVideos',
                                },
                            ]
                        }
                    ]
                },
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'isOutOfStock',
                            type: 'checkbox',
                            label: 'Out of Stock'
                        },
                        {
                            name: 'isSoldOut',
                            type: 'checkbox',
                            label: 'Sold Out'
                        },
                        {
                            name: 'isComingSoon',
                            type: 'checkbox',
                            label: 'Coming Soon (if applicable)',
                        },
                        {
                            name: 'isExclusive',
                            type: 'checkbox',
                            label: 'Exclusive',
                        },
                        {
                            name: 'variantPrice',
                            type: "number",
                            label: "Variant Price (if applicable)",
                        },
                    ],
                },
            ]
        },
        {
            name: "description",
            type: "richText",
            label: "Description"
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'isOutOfStock',
                    type: 'checkbox',
                    label: 'Out of Stock'
                },
                {
                    name: 'isQueueFull',
                    type: 'checkbox',
                    label: 'Queue Full'
                },
                {
                    name: 'isSoldOut',
                    type: 'checkbox',
                    label: 'Sold Out'
                },
                {
                    name: 'isHotSelling',
                    type: 'checkbox',
                    label: 'Hot Selling',
                },
                {
                    name: 'isFromBestSeller',
                    type: 'checkbox',
                    label: 'From BestSeller',
                },
                {
                    name: 'isFeatured',
                    type: 'checkbox',
                    label: 'Featured',
                },
                {
                    name: 'isNewProduct',
                    type: 'checkbox',
                    label: 'New',
                },
            ],
        },
        {
            type: "row",
            fields: [
                {
                    name: 'isBestSeller',
                    type: 'checkbox',
                    label: 'Best Seller',
                },
                {
                    name: 'isSpecialOffer',
                    type: 'checkbox',
                    label: 'Special Offer',
                },
                {
                    name: 'isBestValue',
                    type: 'checkbox',
                    label: 'Best Value',
                },
                {
                    name: 'isTimeLimitedOffer',
                    type: 'checkbox',
                    label: 'Time Limited Offer',
                },
                {
                    name: 'isComingSoon',
                    type: 'checkbox',
                    label: 'Coming Soon',
                },
                {
                    name: 'isExclusive',
                    type: 'checkbox',
                    label: 'Exclusive',
                },
                {
                    name: 'isLimitedTimeSale',
                    type: 'checkbox',
                    label: 'Limited Time Sale',
                },
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'isPopular',
                    type: 'checkbox',
                    label: 'Popular',
                },
            ]
        }
    ]
} 
