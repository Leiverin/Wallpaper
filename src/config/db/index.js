import mongoose from 'mongoose';

export default async function connect(){
     try {
          await mongoose.connect('mongodb://localhost:27017/WallpaperDatabase', {});
          console.log("Connect successfully");
     } catch (error) {
          console.log("Connect failed: ", error);
     }
}

