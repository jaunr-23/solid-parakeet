import { Response } from "express";
import { RequestCustom } from "../types";

export class AdminController {
  /**
   * Returns the profession that earned the most money (sum of jobs paid) 
   * for any contactor that worked in the query time range.
   * @param req 
   * @param response 
   */
  async getBestProfession(req: RequestCustom, response: Response){

  }

  /**
   * returns the clients the paid the most for jobs in the query time period. 
   * limit query parameter should be applied, default limit is 2.
   * @param req 
   * @param response 
   */
  async getBestClients(req: RequestCustom, response: Response){

  }
}