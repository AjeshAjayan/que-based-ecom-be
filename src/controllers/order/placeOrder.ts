import { Request, RequestHandler, Response } from "express";
import { ResponseWrapper } from "../../models/ResponseWrapper";
import { placeOrderPostReq } from "./models/PlaceOrderPostReq.type";
import payload from "payload";
import { ProductsSchema } from "../../collections/Products/ProductsSchema";
import { OrderMasterSchema } from "../../collections/orderMaster/OrderMasterSchema";
import { OrderChildSchema } from "../../collections/orderChild/OrderChildSchema";
import { PaymentsSchema } from "../../collections/payments/PaymentsSchema";

export const placeOrderController: RequestHandler =async (
    req: Request<any, any, placeOrderPostReq>,
    res: Response<ResponseWrapper<any>>
) => {
    try {
        const isSingleProduct = req.body.isSingleProduct;
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        const sizeId = req.body.sizeId;
        const colorId = req.body.colorId;
        const materialId = req.body.materialId;


        if(!productId) {
            res.status(404).json({ 
                message: 'Not found', 
                statusCode: 404, 
                status: 'not-found', 
                data: {} 
            });
        }
        
        if(isSingleProduct) {
            const ProductModel = payload.db.collections[ProductsSchema.slug];
            const product = await ProductModel.findById(productId);
            const selectedVariant = product.variants.find(variant => 
                variant.size === sizeId &&
                (variant.color as Array<any>).includes(colorId) &&
                (variant.material as Array<any>).includes(materialId)
            );

            if(selectedVariant === undefined) {
                res.status(404).json({ 
                    message: 'Variant Not found', 
                    statusCode: 404, 
                    status: 'not-found', 
                    data: {}
                });
            } else {

                /**
                 * calculate price
                 */
                const price = selectedVariant.variantPrice || product.price;
                const totalPrice = price * quantity;
    
                const OrderMasterModel = payload.db.collections[OrderMasterSchema.slug];
                const orderMaster = await OrderMasterModel.create({
                    isCustomerOrder: true,
                })
    
                // move to next step of order
                const PaymentModel = payload.db.collections[PaymentsSchema.slug];
                const payment = await PaymentModel.create({
                    publicUser: (req as any).user._id,
                })
    
                const OrderChildModel = payload.db.collections[OrderChildSchema.slug];
                await OrderChildModel.create({
                    isCustomerOrder: true,
                    orderMaster: orderMaster._id,
                    product: productId,
                    size: sizeId,
                    quantity: quantity,
                    color: colorId,
                    material: materialId,
                    totalPrice: totalPrice,
                    discount: 0, // for future
                    publicUser: (req as any).user._id,
                    payment: payment._id,
                })
    
                res.status(200).json({ 
                    message: 'Order created successfully', 
                    statusCode: 200,
                    status: 'success', 
                    data: {}
                });
            }

        } else {
            res.status(404).json({ 
                message: 'Not found', 
                statusCode: 404, 
                status: 'not-found', 
                data: {} 
            });
        } 

    } catch (err) {
        res.status(500).json({ 
            message: 'Something went wrong', 
            statusCode: 500, 
            status: 'error', 
            data: {} 
        });
    }
}