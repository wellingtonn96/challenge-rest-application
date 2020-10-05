import { Request, Response } from 'express';
import { CreateLoanContractsService } from '../services/CreateLoanContractsService';

class LoanContractsController {
  public async create(request: Request, response: Response): Promise<any> {
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

    const loans = await createLoanControcts.execute({
      name,
      email,
      cpf,
      loan_amount,
      monthly_income,
      date_birth,
      marital_status,
      address,
    });

    return response.json(loans);
  }
}

export { LoanContractsController };
