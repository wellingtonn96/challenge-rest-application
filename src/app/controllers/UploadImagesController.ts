import { Request, Response } from 'express';
import { UpdateDocumentsService } from '../services/UpdateDocumentsService';
import { UploadImagesService } from '../services/UploadImagesService';

class UploadImagesController {
  public async create(request: Request, response: Response): Promise<any> {
    const createDocuments = new UploadImagesService();

    const data = request.files as Express.Multer.File[];

    const { state, loan_id } = request.session;

    const documents = await createDocuments.execute({ data, state, loan_id });

    request.session.state = 'APPROVAL';

    return response.json(documents);
  }

  public async update(request: Request, response: Response): Promise<any> {
    const updateDocuments = new UpdateDocumentsService();

    const data = request.files as Express.Multer.File[];

    const { loan_id, state } = request.session;

    const documents = await updateDocuments.execute({ data, loan_id, state });

    return response.json(documents);
  }
}

export { UploadImagesController };
