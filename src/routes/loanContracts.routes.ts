import { Router } from 'express';
import { LoanContractsController } from '../controllers/LoanContractsController';
import { UploadImagesController } from '../controllers/UploadImagesController';

const usersRouter = Router();

const loanContractsController = new LoanContractsController();
const uploadImagesController = new UploadImagesController();

usersRouter.post(
  '/',
  loanContractsController.create,
  uploadImagesController.create,
);

export default usersRouter;
