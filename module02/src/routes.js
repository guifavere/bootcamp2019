import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import AppointmentController from './app/controllers/AppointmentController';
import FileController from './app/controllers/FileController';
import NotificationController from './app/controllers/NotificationController';
import ProviderController from './app/controllers/ProviderController';
import SessionController from './app/controllers/SessionController';
import ScheduleController from './app/controllers/ScheduleController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/midllewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/notifications', NotificationController.index);
routes.get('/providers', ProviderController.index);
routes.get('/schedule', ScheduleController.index);
routes.put('/users', UserController.update);

export default routes;
