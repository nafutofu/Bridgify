import express from 'express';

import { authRouter } from './auth';
import { userRouter } from './users';
import { customerRouter } from './customer';
import { nftRouter } from './nft';

export const services = express.Router();

services.use('/auth', authRouter);
services.use('/users', userRouter);
services.use('/customer', customerRouter);
services.use('/nft', nftRouter);