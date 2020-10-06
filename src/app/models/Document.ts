import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Loan from './Loan';

@Entity('documents')
class Document {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  cnh_cpf_img: string;

  @Column()
  income_proof_img: string;

  @Column()
  property_img: string;

  @Column()
  loan_id: number;

  @OneToOne(() => Loan)
  @JoinColumn({ name: 'loan_id' })
  loan: Loan;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export { Document };
