import { Request, Response } from 'express';
import { UploadImagesService } from '../services/UploadImagesService';

class UploadImagesController {
  public async create(request: Request, response: Response): Promise<any> {
    const createDocuments = new UploadImagesService();

    const data = request.files as Express.Multer.File[];

    const documents = await createDocuments.execute(data);

    return response.json(documents);
  }
}

export { UploadImagesController };
