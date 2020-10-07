import { validate } from 'class-validator';
import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';
import { Document } from '../models/Document';
import Loan from '../models/Loan';

interface IRequest {
  data: Express.Multer.File[];
  state: string;
  loan_id: number;
}

class UploadImagesService {
  public async execute(dataRequest: IRequest): Promise<Document> {
    const { data, state, loan_id } = dataRequest;
    if (state !== 'UPLOAD') {
      throw new AppError('You already have to create the loan first!');
    }

    const loanRepository = getRepository(Loan);

    const documentsRepository = getRepository(Document);

    const cnhCpfImg = data.find(file => file.fieldname === 'cnh_cpf_img');

    const incomeProofImg = data.find(
      file => file.fieldname === 'income_proof_img',
    );

    const propertyImg = data.find(file => file.fieldname === 'property_img');

    const loan = await loanRepository.findOne(loan_id);

    const documents = documentsRepository.create({
      cnh_cpf_img: cnhCpfImg?.filename,
      income_proof_img: incomeProofImg?.filename,
      property_img: propertyImg?.filename,
      loan,
    });

    const errors = await validate(documents);

    if (errors.length > 0) {
      throw new AppError(errors);
    }

    await documentsRepository.save(documents);

    return documents;
  }
}

export { UploadImagesService };
