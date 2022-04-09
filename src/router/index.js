import siteRouter from './site.js';
import curdRouter from './crud.js';
import webapiRouter from './webapi.js';
function router(app){
     //Home
     app.use('/', siteRouter);

     // CRUD
     app.use('/', curdRouter);

     // API
     app.use('/api-management/', webapiRouter);
}

export default router;
