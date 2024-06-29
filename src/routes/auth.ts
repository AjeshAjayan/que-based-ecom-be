import express from 'express';
import { loginController } from '../controllers/login/login';
import { sendOTPController } from '../controllers/login/sendOTP';
import { validateOTPController } from '../controllers/login/validateOTP';
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware';

const authRouter = express.Router();

authRouter.get('/', verifyTokenMiddleware, loginController);

authRouter.post('/sendOTP', sendOTPController);

authRouter.post('/validateOTP', validateOTPController);

export default authRouter;
