import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';
import Loan from '../models/Loan';

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  loan_amount: number;
  monthly_income?: number;
  date_birth?: Date;
  marital_status?: string;
  address?: string;
}

class UpdateLoanService {
  public async execute(loan_id: number, data: IRequest) {
    const loanRepository = getRepository(Loan);

    const loan = await loanRepository.findOne(loan_id);

    if (!loan) {
      throw new AppError('loan with this id not exists');
    }

    if (!loan.status.includes('UNDEFINED')) {
      throw new AppError('This loan can not be updated!');
    }

    Object.assign(loan, data);

    await loanRepository.save(loan);

    return loan;
  }
}

export { UpdateLoanService };
