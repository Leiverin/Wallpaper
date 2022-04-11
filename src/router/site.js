import express from 'express';
const router = express.Router();

import siteController from '../app/controllers/SiteController.js';

router.get('/', siteController.index);
router.get('/detail/:id', siteController.detail);
router.get('/download/:id', siteController.download);

export default router;
