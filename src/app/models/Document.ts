import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('documents')
class Document {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  cnh_cpf_img: string;

  @Column()
  income_proof_img: string;

  @Column()
  property_img: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export { Document };
