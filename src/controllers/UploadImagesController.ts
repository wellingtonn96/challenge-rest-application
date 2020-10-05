import { Request, Response } from 'express';

class UploadImagesController {
  public async create(request: Request, response: Response): Promise<any> {
    console.log(request.files);
    return response.json().send();
  }
}

export { UploadImagesController };
