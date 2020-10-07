import { Router } from 'express';
import multer from 'multer';
import { LoanContractsController } from '../controllers/LoanContractsController';
import { UploadImagesController } from '../controllers/UploadImagesController';
import uploadConfig from '../../config/upload';
import { UpdataStatusController } from '../controllers/UpdateStatusController';

const upload = multer(uploadConfig);

const usersRouter = Router();

const loanContractsController = new LoanContractsController();
const uploadImagesController = new UploadImagesController();
const updateStatusController = new UpdataStatusController();

usersRouter.get('/', loanContractsController.index);

usersRouter.post('/', loanContractsController.create);

usersRouter.put('/', loanContractsController.update);

usersRouter.post('/upload', upload.any(), uploadImagesController.create);

usersRouter.put('/upload', upload.any(), uploadImagesController.update);

usersRouter.patch('/status', updateStatusController.create);

export default usersRouter;
