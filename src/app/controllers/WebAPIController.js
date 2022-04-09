import Item from '../models/item.js';
import HandleMongoose from '../../util/MongooseHandler.js';
class WebAPIController{
     GetData(req, res, next){
          Item.find({})
          .then(response=>{
               res.send(HandleMongoose.handleWithMultipleObjects(response));
          })
          .catch(next);
     }
}


export default new WebAPIController();
