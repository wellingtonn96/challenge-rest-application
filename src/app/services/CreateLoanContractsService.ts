import { validate } from 'class-validator';
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

class CreateLoanContractsService {
  public async execute(data: IRequest): Promise<Loan> {
    const loanContractsRepository = getRepository(Loan);

    const loanContracts = loanContractsRepository.create(data);

    const errors = await validate(loanContracts);

    if (errors.length > 0) {
      throw new AppError(errors);
    }

    await loanContractsRepository.save(loanContracts);

    return loanContracts;
  }
}

export { CreateLoanContractsService };
