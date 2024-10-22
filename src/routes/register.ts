import express from 'express';
import { registrationController } from '../controllers/login/register';
import { verifyTokenMiddleware } from '../middleware/verifyTokenMiddleware';

const registrationRouter = express.Router();

registrationRouter.put('/', verifyTokenMiddleware, registrationController)

export default registrationRouter;
