import { Router } from 'express';
import roomController from '../Controller/room';

Router.get('/', roomController.getRooms)