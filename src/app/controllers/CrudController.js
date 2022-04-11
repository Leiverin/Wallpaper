import Item from '../models/item.js';
import HandleMongoose from '../../util/MongooseHandler.js';

class CrudController{
     // [GET] /create
     create(req, res, next){
          res.render('create', {title: 'Create', message: '', page: 'create'});
     }
     // [POST] /create
     createResult(req, res, next){
          const formData = req.body;
          const item = Item(formData);
          item.save();
          res.render('create', {title: 'Create', message: 'Successfully added '+formData.title, error: ''});
     }

     // [GET] /detail/:id/edit
     update(req, res, next){
          Item.findById(req.params.id)
          .then(doc=>{
               res.render('update', {
                    title: 'Update',
                    page: 'Update',
                    item: HandleMongoose.handleWithSingleObject(doc),
               });
          }).catch(next);
     }

     // [PUT] /detail/:id?_method=PUT
     updated(req, res, next){
          Item.updateOne({_id: req.params.id}, req.body)
          .then(()=>{
               res.redirect('/detail/' + req.params.id)
          })
          .catch(next);
     }

     // [DELETE] /detail/:id
     delete(req, res, next) {
          Item.deleteOne({_id: req.params.id})
          .then(()=>{
               res.redirect('/');
          })
          .catch(next);
     }
}
export default new CrudController();

