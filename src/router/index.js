import siteRouter from './site.js';

function router(app){
     //Home
     app.use('/', siteRouter);
}

export default router;
