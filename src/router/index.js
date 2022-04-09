import siteRouter from './site.js';
import curdRouter from './crud.js';

function router(app){
     //Home
     app.use('/', siteRouter);

     // CRUD
     app.use('/', curdRouter);
}

export default router;
