import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Loan from '../models/Loan';
import { CreateLoanContractsService } from '../services/CreateLoanContractsService';
import { UpdateLoanService } from '../services/UpdateLoanService';

class LoanContractsController {
  public async index(request: Request, response: Response) {
    const loanRepository = getRepository(Loan);

    const loans = await loanRepository.find();

    return response.json(loans);
  }

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

    request.session.loan_id = loan.id;
    request.session.state = 'UPLOAD';

    return response.json(loan);
  }

  public async update(request: Request, response: Response) {
    const { loan_id } = request.session;
    const { body } = request;

    const updateLoans = new UpdateLoanService();

    const loan = await updateLoans.execute(loan_id, body);

    return response.json(loan);
  }
}

export { LoanContractsController };
