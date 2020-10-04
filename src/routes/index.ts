import { Router } from 'express';

import loanContracts from './loanContracts.routes';

const routes = Router();

routes.use('/contract', loanContracts);

export default routes;
