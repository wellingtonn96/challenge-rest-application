import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import AppError from '../../errors/AppError';
import { Document } from '../models/Document';
import Loan from '../models/Loan';
import uploadConfig from '../../config/upload';

interface IRequest {
  data: Express.Multer.File[];
  loan_id: number;
  state: string;
}

class UpdateDocumentsService {
  public async execute(dataRequest: IRequest): Promise<Document> {
    const { data, loan_id } = dataRequest;

    const loanRepository = getRepository(Loan);

    const documentsRepository = getRepository(Document);

    const cnhCpfImg = data.find(file => file.fieldname === 'cnh_cpf_img');

    const incomeProofImg = data.find(
      file => file.fieldname === 'income_proof_img',
    );

    const propertyImg = data.find(file => file.fieldname === 'property_img');

    const loan = await loanRepository.findOne(loan_id);

    const documents = await documentsRepository.findOne({
      where: {
        loan_id,
      },
    });

    if (!loan) {
      throw new AppError('Loan not exists!');
    }

    if (!documents) {
      throw new AppError('Documents not exists!');
    }

    if (!loan.status.includes('UNDEFINED')) {
      throw new AppError('This document can not be updated!');
    }

    const dataDocuments = {
      cnh_cpf_img: cnhCpfImg?.filename,
      income_proof_img: incomeProofImg?.filename,
      property_img: propertyImg?.filename,
    };

    const cnhCpfImgPath = path.join(
      uploadConfig.directory,
      documents.cnh_cpf_img,
    );
    const incomeProofImgPath = path.join(
      uploadConfig.directory,
      documents.income_proof_img,
    );
    const propertyImgPath = path.join(
      uploadConfig.directory,
      documents.property_img,
    );

    await fs.promises.unlink(cnhCpfImgPath);
    await fs.promises.unlink(incomeProofImgPath);
    await fs.promises.unlink(propertyImgPath);

    Object.assign(documents, dataDocuments);

    await documentsRepository.save(documents);

    return documents;
  }
}

export { UpdateDocumentsService };
