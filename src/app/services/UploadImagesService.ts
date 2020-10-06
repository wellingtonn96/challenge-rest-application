import { getRepository } from 'typeorm';
import { Document } from '../models/Document';

class UploadImagesService {
  public async execute(data: Express.Multer.File[]): Promise<Document> {
    const documentsRepository = getRepository(Document);

    const cnhCpfImg = data.find(file => file.fieldname === 'cnh_cpf_img');

    const incomeProofImg = data.find(
      file => file.fieldname === 'income_proof_img',
    );

    const propertyImg = data.find(file => file.fieldname === 'property_img');

    const documents = documentsRepository.create({
      cnh_cpf_img: cnhCpfImg?.filename,
      income_proof_img: incomeProofImg?.filename,
      property_img: propertyImg?.filename,
    });

    await documentsRepository.save(documents);

    return documents;
  }
}

export { UploadImagesService };
