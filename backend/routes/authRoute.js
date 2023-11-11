import express from 'express';
import { login, register, test } from '../controllers/authController.js';
import { isAdmin, protect } from '../middlewares/authMiddleware.js';


const router = express.Router();
 
router.post('/register', register)
router.post('/login',login)
router.get('/test',protect,isAdmin,test)
export default router;