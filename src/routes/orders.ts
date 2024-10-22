import express, { Request, Response } from 'express';
import { ResponseWrapper } from '../models/ResponseWrapper';
import { placeOrderController } from '../controllers/order/placeOrder';

const orderRouter = express.Router();

orderRouter.post('/place-order', placeOrderController);

export default orderRouter;
