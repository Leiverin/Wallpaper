import mongoose from "mongoose";
const Schema = mongoose.Schema;

const item = new Schema({
     title: {type: 'string'},
     content: {type: 'string'},
     link: {type: 'string'},
},{
     timestamps: true,
})

export default mongoose.model('Wallpapers', item);
