import express from 'express';
const router = express.Router();

import { subscribeNewsLetter , getAllSubscriptions } from '../controllers/newsletter.controller.js';
import protect from '../config/protect.js';


router.get('/get-subscribers' , protect, getAllSubscriptions);
router.post('/subscribe', subscribeNewsLetter);

export default router;