import Item from '../models/item.js';
import HandleMongoose from '../../util/MongooseHandler.js';
import item from '../models/item.js';

class SiteController{

     // [GET] /
     index(req, res, next){
          Item.find({}, (err, docs)=>{
               if(err){
                    next(err);
               }else{
                     res.render('home', {
                         title: 'Home',
                         docs: HandleMongoose.handleWithMultipleObjects(docs),
                    });
               }
          });
     }
     
     // [GET] /detail/:id
     detail(req, res, next){
          Item.findById({_id: req.params.id}, (err, data)=>{
               if(err){
                    next(err);
               }else{
                    const item = HandleMongoose.handleWithSingleObject(data);
                    res.render('detail',{
                         title: item.title,
                         item: item,
                         page: 'detail'
                    });
               }
          })
     }

}

export default new SiteController();
