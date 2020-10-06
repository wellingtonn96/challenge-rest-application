import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class createForeignKeyLoansAndDocuments1601993462986
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'documents',
      new TableColumn({
        name: 'loan_id',
        type: 'int',
      }),
    );

    await queryRunner.createForeignKey(
      'documents',
      new TableForeignKey({
        name: 'documentsLoans',
        columnNames: ['loan_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'loans',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('documents', 'documentsLoans');
    await queryRunner.dropColumn('documents', 'loan_id');
  }
}
