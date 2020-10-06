import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableLoanContracts1601836170043
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'loans',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'varchar',
          },
          {
            name: 'loan_amount',
            type: 'decimal',
          },
          {
            name: 'monthly_income',
            type: 'decimal',
            isNullable: true,
          },
          {
            name: 'date_birth',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'marital_status',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('loans');
  }
}
