import express from 'express';
import { registrationController } from '../controllers/login/register';

const registrationRouter = express.Router();

registrationRouter.put('/', registrationController)

export default registrationRouter;
