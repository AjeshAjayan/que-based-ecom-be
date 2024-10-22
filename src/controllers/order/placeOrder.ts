import { Request, RequestHandler, Response } from "express";
import { ResponseWrapper } from "../../models/ResponseWrapper";

export const placeOrderController: RequestHandler =async (req: Request<any, any, any>, res: Response<ResponseWrapper<any>>) => {
    try {
        
        res.status(200).json({ 
            message: 'Order placed successfully', 
            statusCode: 200, 
            status: 'success', 
            data: {} 
        });
    } catch (err) {
        res.status(500).json({ 
            message: 'Something went wrong', 
            statusCode: 500, 
            status: 'error', 
            data: {} 
        });
    }
}