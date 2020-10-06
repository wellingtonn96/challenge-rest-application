import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('loans')
class Loan {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  cpf: string;

  @IsNumber()
  @IsNotEmpty()
  @Column()
  loan_amount: number;

  @IsNumber()
  @Column()
  monthly_income?: number;

  @IsString()
  @Column()
  date_birth?: Date;

  @IsString()
  @Column()
  marital_status?: string;

  @IsString()
  @Column()
  address?: string;

  @CreateDateColumn()
  created_at?: Date;

  @CreateDateColumn()
  updated_at?: Date;
}

export default Loan;
