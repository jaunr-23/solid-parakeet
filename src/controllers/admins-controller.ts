import { Response } from "express";
import { RequestCustom } from "../types";
import { DateTime } from "luxon";
import { sequelize } from "../model";

export class AdminController {
  /**
   * Returns the profession that earned the most money (sum of jobs paid) 
   * for any contractor that worked in the query time range.
   * @param req 
   * @param response 
   */
  async getBestProfession(req: RequestCustom, res: Response){
    console.log(req.query);
    let startDate;
    let endDate;
    try {
      startDate = DateTime.fromISO(req.query.start as string);
      endDate = DateTime.fromISO(req.query.end as string); 
    } catch (error) {
      return res.status(400).send();
    }

    if(!startDate || !endDate) { return res.status(400).send() }
    if(startDate > endDate) { return res.status(400).send('Error: start date greater than end date') }

    const [results, metadata] = await sequelize.query(
      `
      SELECT SUM(price), ContractorId, Profiles.firstName, Profiles.lastName, Profiles.profession FROM Jobs 
      LEFT JOIN Contracts ON Jobs.ContractId = Contracts.id
      LEFT JOIN Profiles ON Contracts.ContractorId = Profiles.id
      WHERE Jobs.paid = 1 AND Jobs.updatedAt  BETWEEN '${startDate}' AND '${endDate}'
      GROUP BY ContractorId
      ORDER BY 1 DESC
      LIMIT 1
      `
    );

    return res.status(200).json(results);
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