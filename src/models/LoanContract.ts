import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('loanContracts')
class LoanContract {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  loan_amount: number;

  @Column()
  monthly_income?: number;

  @Column()
  date_birth?: Date;

  @Column()
  marital_status?: string;

  @Column()
  address?: string;

  @CreateDateColumn()
  created_at?: Date;

  @CreateDateColumn()
  updated_at?: Date;
}

export default LoanContract;
