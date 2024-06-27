import express from 'express';
import { loginController } from '../controllers/login';

const loginRouter = express.Router();

loginRouter.get('/', loginController)

export default loginRouter;
