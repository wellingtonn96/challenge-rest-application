import { Request, Response } from 'express';

class UploadImagesController {
  public async create(request: Request, response: Response): Promise<any> {
    return response.json({ message: 'Hello Upload' });
  }
}

export { UploadImagesController };
