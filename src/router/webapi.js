import express from 'express';
const router = express.Router();

import webAPIController from '../app/controllers/WebAPIController.js';

router.get('/get-data', webAPIController.GetData);

export default router;
