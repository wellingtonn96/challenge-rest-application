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

    const loan = await createLoanControcts.execute({
      name,
      email,
      cpf,
      loan_amount,
      monthly_income,
      date_birth,
      marital_status,
      address,
    });

    request.loan = {
      id: loan.id,
    };

    return response.json(loan);
  }
}

export { LoanContractsController };
