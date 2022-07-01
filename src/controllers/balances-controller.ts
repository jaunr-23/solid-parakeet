import { Response } from "express";
import { RequestCustom } from "../types";

export class BalanceController {

  /**
   * Deposits money into the the the balance of a client,
   * a client can't deposit more than 25% his total of jobs to pay.
   * (at the deposit moment)
   * @param req Express request
   * @param res Express response
   */
  async deposit(req: RequestCustom, res: Response){
    const profileId = 
  }
}