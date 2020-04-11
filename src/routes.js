import { Router } from 'express';
import UserControler from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// public routes
routes.post('/users', UserControler.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// private routes
routes.put('/users', UserControler.update);

export default routes;
