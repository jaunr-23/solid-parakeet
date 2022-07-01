import express from 'express';
import { AdminController } from '../controllers';
import { getProfile } from '../middleware/getProfile'

const router = express.Router();
const controller = new AdminController();

router.route('/admin/best-profession?start=<date>&end=<date>').get(getProfile, (req, response) => controller.getBestProfession(req as any, response));
router.route('/admin/best-clients?start=<date>&end=<date>&limit=<integer>').get(getProfile, (req, response) => controller.getBestClients(req as any, response));


export const adminRouter = router;
