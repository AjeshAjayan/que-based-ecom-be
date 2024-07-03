import { ProductsSchema } from "./Products/ProductsSchema";
import PublicUsersSchema from "./publicUsers/PublicUsersSchema";
import Users from "./Users";
import { CategoriesSchema } from "./categories/CategoriesSchema";
import { ColorsSchema } from "./colors/ColorsSchema";
import { MaterialsSchema } from "./materials/MaterialsSchema";
import { ProductImagesSchema } from "./productImages/ProductImages";
import { ProductVideosSchema } from "./productVideos/productVideosSchema";
import { SizesSchema } from "./sizes/SizesSchema";

export const collections = [
    Users, 
    PublicUsersSchema, 
    ProductsSchema, 
    CategoriesSchema, 
    ProductImagesSchema, 
    ProductVideosSchema, 
    MaterialsSchema, 
    SizesSchema, 
    ColorsSchema
];
