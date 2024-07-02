import { CollectionConfig } from "payload/types";
import { CategoriesSchema } from "../categories/CategoriesSchema";
import { MaterialsSchema } from "../materials/MaterialsSchema";
import { ColorsSchema } from "../colors/ColorsSchema";
import { SizesSchema } from "../sizes/SizesSchema";

export const ProductsSchema: CollectionConfig = {
    slug: "products",
    fields: [
        {
            name: "title",
            type: "text",
            label: "Title",
            required: true,
            unique: true
        },
        {
            name: "description",
            type: "richText",
            label: "Description"
        },
        {
            name: "price",
            type: "number",
            label: "Price"
        },
        {
            name: "quantity",
            type: "number",
            label: "Quantity"
        },
        {
            name: "category",
            type: "relationship",
            label: "Category",
            relationTo: CategoriesSchema.slug
        },
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
            name: 'images',
            type: 'upload',
            required: true,
            // TODO: configure upload
            relationTo: 'productImages'
        },
        {
            name: 'videos',
            type: 'upload',
            // TODO: configure upload
            relationTo: 'productVideos'
        },
        {
            name: 'moq',
            required: true,
            type: 'number',
            label: 'MOQ'
        },
        {
            name: 'material',
            type: 'relationship',
            label: 'Material',
            relationTo: MaterialsSchema.slug
        },
        {
            name: 'size',
            type: 'relationship',
            label: 'Size',
            // TODO: create relationship
            relationTo: SizesSchema.slug,
        },
        {
            name: 'color',
            type: 'relationship',
            label: 'Color',
            relationTo: ColorsSchema.slug
        },
        {
            name: 'colorTextToDisplay',
            type: 'text',
            label: 'Color Text To Display',
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
        {
            name: 'isPopular',
            type: 'checkbox',
            label: 'Popular',
        }, 
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
} 
