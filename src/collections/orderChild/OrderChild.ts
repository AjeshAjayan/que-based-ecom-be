import { CollectionConfig } from "payload/types";
import { ProductsSchema } from "../Products/ProductsSchema";
import { OrderMasterSchema } from "../orderMaster/OrderMaster";
import { SizesSchema } from "../sizes/SizesSchema";
import { ColorsSchema } from "../colors/ColorsSchema";
import { MaterialsSchema } from "../materials/MaterialsSchema";
import PublicUsersSchema from "../publicUsers/PublicUsersSchema";
import { PaymentsSchema } from "../payments/Payments";

export const OrderChildSchema: CollectionConfig = {
    slug: "order-child",
    fields: [
        {
            name: "orderMaster",
            type: "relationship",
            relationTo: OrderMasterSchema.slug,
            required: true,
        },
        {
            name: "product",
            type: "relationship",
            relationTo: ProductsSchema.slug,
            required: true,
        },
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
            name: "totalPrice",
            type: "number",
            required: true,
        },
        {
            name: "totalQuantity",
            type: "number",
            required: true,
        },
        {
            name: "discount",
            type: "number",
        },
        {
            name: 'publicUser',
            type: "relationship",
            relationTo: PublicUsersSchema.slug,
            required: true,
        },
        {
            name: 'payments',
            type: 'relationship',
            relationTo: PaymentsSchema.slug,
            required: true,
            hasMany: true,
        },
        {
            name: "isReturned",
            type: "checkbox",
            defaultValue: false,
        },
        {
            name: "isShipped",
            type: "checkbox",
            defaultValue: false,
        },
        {
            name: "isDelivered",
            type: "checkbox",
            defaultValue: false,
        },
    ]
}
