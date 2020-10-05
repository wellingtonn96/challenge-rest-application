// import request from 'supertest';
import { Connection, getConnection } from 'typeorm';
import createConnection from '../database';

let connection: Connection;

describe('LoanContracts', () => {
  beforeAll(async () => {
    connection = await createConnection('test-connection');

    await connection.runMigrations();
  });

  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close();
    await mainConnection.close();
  });

  it('should be able to create loan contracts in the session create', async () =>
    null);

  it('should be able to upload images in the session upload images ', async () =>
    null);

  it('should be able to aprove or desaprove contracts', async () => null);
});
