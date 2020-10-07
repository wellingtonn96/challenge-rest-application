import { Request, Response } from 'express';
import { UpdateStatusLoanService } from '../services/UpdateStatusLoanService';

class UpdataStatusController {
  public async create(request: Request, response: Response) {
    const { loan_id, state } = request.session;
    const { status } = request.body;

    const updateStatusLoan = new UpdateStatusLoanService();

    const statusLoan = await updateStatusLoan.execute({
      status,
      loan_id,
      state,
    });

    return response.json(statusLoan);
  }
}

export { UpdataStatusController };
