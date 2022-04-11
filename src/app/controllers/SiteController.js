import Item from '../models/item.js';
import HandleMongoose from '../../util/MongooseHandler.js';
const port = process.env.PORT || 4000;
import path from 'path';
import { fileURLToPath } from 'url';
// import https from 'https';
// import fs from 'fs';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

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

     // [GET] /download/:link
     download(req, res, next) {
          // axios({
          //      url: req.url,
          //      method: 'GET',
          //      responseType: 'blob'
          // }).then(res=>{
          //      FileDownload(res.data, )
          // })
          
          // console.log(file);
          
          
          
          Item.findById({_id: req.params.id})
          .then((doc)=>{
               // const filename = path.basename(doc.link);
               // const file = fs.createWriteStream('uploads/'+filename);
               // const request = https.get(doc.link, function(response) {
               //      response.pipe(file);

               //      file.on("finish", () => {
               //           file.close();
               //           res.download(path.join(__dirname,'uploads',filename));
               //           res.redirect('back');
               //      });
               // });
               
          })
     }

}

export default new SiteController();
