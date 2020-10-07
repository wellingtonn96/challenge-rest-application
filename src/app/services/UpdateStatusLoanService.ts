import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';
import Loan from '../models/Loan';

interface IRequest {
  status: 'APPROVED' | 'DISAPPROVED';
  loan_id: number;
  state: string;
}

class UpdateStatusLoanService {
  public async execute(data: IRequest): Promise<Loan> {
    if (data.state !== 'APPROVAL') {
      throw new AppError('You already have to upload the images first!');
    }
    const { status, loan_id } = data;

    const loanRepository = getRepository(Loan);

    const loan = await loanRepository.findOne(loan_id);

    if (!loan) {
      throw new AppError('Internal Error');
    }

    loan.status = status;

    await loanRepository.save(loan);

    return loan;
  }
}

export { UpdateStatusLoanService };
