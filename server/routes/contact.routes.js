import express from 'express';
const router = express.Router()
import { getContacts, submitContact } from '../controllers/contact.controller.js';
import protect from '../config/protect.js';

router.get('/', protect, getContacts);
router.post('/', submitContact);

export default router;  