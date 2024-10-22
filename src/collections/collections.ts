import { ProductsSchema } from "./Products/ProductsSchema";
import PublicUsersSchema from "./publicUsers/PublicUsersSchema";
import Users from "./Users";
import { CategoriesSchema } from "./categories/CategoriesSchema";
import { ColorsSchema } from "./colors/ColorsSchema";
import { MaterialsSchema } from "./materials/MaterialsSchema";
import { ProductImagesSchema } from "./productImages/ProductImages";
import { ProductVideosSchema } from "./productVideos/productVideosSchema";
import { SizesSchema } from "./sizes/SizesSchema";
import { SubCategoriesSchema } from "./subCategories/subCategoriesSchema";
import { OrderMasterSchema } from "./orderMaster/OrderMasterSchema";
import { OrderChildSchema } from "./orderChild/OrderChildSchema";
import { PaymentsSchema } from "./payments/PaymentsSchema";
import { QueueSchema } from "./queue/Queue";

export const collections = [
    Users, 
    SizesSchema, 
    MaterialsSchema, 
    ColorsSchema,
    CategoriesSchema, 
    SubCategoriesSchema,
    PublicUsersSchema, 
    ProductsSchema, 
    ProductImagesSchema, 
    ProductVideosSchema,
    OrderMasterSchema,
    OrderChildSchema,
    PaymentsSchema,
    QueueSchema,
];
