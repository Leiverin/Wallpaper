import Item from '../models/item.js';
import HandleMongoose from '../../util/MongooseHandler.js';
class WebAPIController{
     GetData(req, res, next){
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Methods', 'GET');
          Item.find({})
          .then(response=>{
               res.send(HandleMongoose.handleWithMultipleObjects(response));
          })
          .catch(next);
     }
}


export default new WebAPIController();
