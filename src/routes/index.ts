import express from 'express';
import authRouter from './auth';
import registrationRouter from './register';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/register', registrationRouter);

export default router;
