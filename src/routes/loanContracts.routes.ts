import { Router } from 'express';
import multer from 'multer';
import { LoanContractsController } from '../controllers/LoanContractsController';
import { UploadImagesController } from '../controllers/UploadImagesController';
import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);

const usersRouter = Router();

const loanContractsController = new LoanContractsController();
const uploadImagesController = new UploadImagesController();

usersRouter.post('/', loanContractsController.create);

usersRouter.post(
  '/upload',
  upload.fields([
    {
      name: 'cnh_cpf',
    },
    {
      name: 'Income_proof',
    },
    {
      name: 'property_images',
    },
  ]),
  uploadImagesController.create,
);

export default usersRouter;
