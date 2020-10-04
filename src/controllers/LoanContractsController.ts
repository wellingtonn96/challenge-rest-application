import { Request, Response } from 'express';

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

    const data = {
      name,
      email,
      cpf,
      loan_amount,
      monthly_income,
      date_birth,
      marital_status,
      address,
    };

    return response.json(data);
  }
}

export { LoanContractsController };
