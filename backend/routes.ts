import {Router} from 'express';
import multer from "multer";

import uploadConfig from "./src/config/upload";
import OrphanagesController from "./src/controllers/OrphanagesController";

const routes = Router();
const upload = multer(uploadConfig);

const cors = require('cors');
const express = require('express');
let app = express();
app.use(cors());
app.options('*', cors());

routes.post('/orphanages', upload.array('images'),OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanage/:id', OrphanagesController.show);

export default routes;
