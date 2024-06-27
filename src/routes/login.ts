import express from 'express';
import { loginController } from '../controllers/login/login';
import { sendOTPController } from '../controllers/login/sendOTP';
import { validateOTPController } from '../controllers/login/validateOTP';

const loginRouter = express.Router();

loginRouter.get('/', loginController);

loginRouter.post('/sendOTP', sendOTPController);

loginRouter.post('/validateOTP', validateOTPController);

export default loginRouter;
