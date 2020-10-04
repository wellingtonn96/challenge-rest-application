import { Router } from 'express';

import usersRouter from './users.routes';

const routes = Router();

routes.use('/contract', usersRouter);

export default routes;
