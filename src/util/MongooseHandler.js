class MongooseHandler{
     handleWithMultipleObjects=(mongooses)=>{
          return mongooses.map(mongoose => mongoose.toObject());
     }
     handleWithSingleObject=(mongoose)=>{
          return mongoose ? mongoose.toObject() : mongoose;
     }
}

export default new MongooseHandler();
