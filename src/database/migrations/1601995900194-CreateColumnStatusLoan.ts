import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateColumnStatusLoan1601995900194 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE `loans` ADD `status` varchar(255) NOT NULL DEFAULT "UNDEFINED"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('loans', 'status');
  }
}
