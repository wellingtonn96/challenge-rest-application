import { Router } from 'express';
import { LoanContractsController } from '../controllers/LoanContractsController';

const usersRouter = Router();

const loanContractsController = new LoanContractsController();

usersRouter.post('/', loanContractsController.create);

export default usersRouter;
