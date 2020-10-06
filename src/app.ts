import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import swaggerUi from 'swagger-ui-express';

import 'express-async-errors';

import routes from './app/routes';
import AppError from './errors/AppError';

import createConnection from './database';

import { documentation } from './utils/swagger';
import upload from './config/upload';

createConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(
  session({
    secret: '546512341fss3wa28f4',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(documentation));

app.use('/files', express.static(upload.directory));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
