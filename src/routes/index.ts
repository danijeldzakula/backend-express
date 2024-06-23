import { Router } from 'express';
import auth from './auth.router';
import users from './user.router';

const router: Router = Router();

export default (): Router => {
  auth(router);
  users(router);

  return router;
};
