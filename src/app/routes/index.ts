import { Router } from 'express';

import loanContracts from './loanContracts.routes';

const routes = Router();

routes.use('/loans', loanContracts);

export default routes;
