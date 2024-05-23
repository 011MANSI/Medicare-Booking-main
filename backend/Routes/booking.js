import express from 'express'
import {athenticate, authenticate} from './../auth/verifyToken.js';
import { getCheckoutSession } from '../Controllers/bookingController.js';


const router = express.Router()

router.post('/checkout-session/:doctorId', authenticate, getCheckoutSession)

export default router; 