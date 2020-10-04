import { Request, Response, NextFunction } from 'express';
import { CreateLoanContractsService } from '../services/CreateLoanContractsService';

class LoanContractsController {
  public async create(
    request: Request,
    response: Response,
    nextFunction: NextFunction,
  ): Promise<any> {
    const {
      name,
      email,
      cpf,
      loan_amount,
      monthly_income,
      date_birth,
      marital_status,
      address,
    } = request.body;

    const createLoanControcts = new CreateLoanContractsService();

    await createLoanControcts.execute({
      name,
      email,
      cpf,
      loan_amount,
      monthly_income,
      date_birth,
      marital_status,
      address,
    });

    return nextFunction();
  }
}

export { LoanContractsController };
