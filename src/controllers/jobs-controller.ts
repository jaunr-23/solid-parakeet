import { Response } from "express";
import { Op } from "sequelize";
import { Contract, Job } from "../model";
import { ContractStatus, RequestCustom } from "../types";

export class JobController {
  async getUnpaid(req: RequestCustom, res: Response){
    const allowedStatus = [ContractStatus.IN_PROGRESS, ContractStatus.NEW];
    const profileId = req.profile.id;
    const jobs = await Job.findAll({
      where: {
        paid: null,
      }
    });

    res.json(jobs).end();
  }

  async setPayment(req: RequestCustom, res: Response){
  }
}