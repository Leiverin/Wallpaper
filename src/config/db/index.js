import mongoose from 'mongoose';
// gnkZlWMZ8aEEZsR7
export default async function connect(){
     try {
          await mongoose.connect('mongodb+srv://vanhungmob:8QV7EdPBHPMemFeo@wallpaper-v1.yqdnc.mongodb.net/WallpaperDatabase', {
               useUnifiedTopology: true,
               useNewUrlParser: true,
          });
          console.log("Connect successfully");
     } catch (error) {
          console.log("Connect failed: ", error);
     }
}

