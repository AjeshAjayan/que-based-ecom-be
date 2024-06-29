import express from 'express';
import { loginController } from '../controllers/login/login';
import { sendOTPController } from '../controllers/login/sendOTP';
import { validateOTPController } from '../controllers/login/validateOTP';

const authRouter = express.Router();

authRouter.get('/', loginController);

authRouter.post('/sendOTP', sendOTPController);

authRouter.post('/validateOTP', validateOTPController);

export default authRouter;
