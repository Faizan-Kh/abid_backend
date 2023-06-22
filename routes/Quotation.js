import express from 'express';
import { createQuotation,getQuotation } from '../controllers/Quotation.js';


const router = express.Router();
router.get("/" , getQuotation);
router.post("/" , createQuotation);

export default router; 
