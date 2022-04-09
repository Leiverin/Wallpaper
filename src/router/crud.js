import express from 'express';
const router = express.Router();

import crudController from '../app/controllers/CrudController.js';

//Create
router.get('/create', crudController.create);
router.post('/create', crudController.createResult);


router.get('/detail/:id/update', crudController.update);
router.put('/detail/:id',crudController.updated);

router.delete('/detail/:id', crudController.delete);

export default router;
