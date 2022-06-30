import express from "express";
import { ContractController } from '../controllers/';


const router = express.Router();
const controller = new ContractController();

router.route('/text').post((req, response) => controller.process(req, response));
router.route('/text/get').post((req, response) => controller.get(req, response));

export const contractRouter = router;