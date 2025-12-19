import express from 'express';
const router = express.Router();
import { getClients , createClient } from '../controllers/client.controller.js';
import protect from '../config/protect.js';

router.get('/', getClients);
router.post('/create', protect , createClient);

export default router;