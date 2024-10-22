import express from 'express';
import authRouter from './auth';
import registrationRouter from './register';
import orderRouter from './orders';
import { verifyTokenMiddleware } from '../middleware/verifyTokenMiddleware';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/register', registrationRouter);
router.use('/order', verifyTokenMiddleware, orderRouter);

export default router;
