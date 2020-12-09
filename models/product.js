const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {
    type: String,
  },
  user: String,
}, {
  timestamps: true
});

const dupeSchema = new Schema({ 
  name: {
      type:String,
  },
  price: {
      type:Number,
  },
  imgs: {
      data: Buffer, 
      contentType: String 
    },
}, {
  timestamps: true
}); 

const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
    min: 0,
  },
  rating: {
    type: String,
  },
  description: {
    type: String,
  },
  brand: {
    type: String,
  },
  colour: {
    type: String,
  },
  review:[reviewSchema],
  img: [{type: Schema.Types.ObjectId, ref: 'Image'}],
  imgs: [{type: Schema.Types.ObjectId, ref: 'Dupe'}],
  dupe:[dupeSchema],
  category: {
    type: String,
  }
},{
    timestamps: true
});


// Compile the schema into a model and export it
module.exports = mongoose.model('Product', productSchema);

