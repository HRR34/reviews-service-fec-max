const mongoose = require('mongoose');
// const db = mongoose.connect('mongodb://localhost/FECreviews');
// const db = mongoose.connect('mongodb://mongo:27017/FECreviews');
// const db = mongoose.connect(process.env.MONGO_URI || 'mongodb://max:reviews7@ds151970.mlab.com:51970/reviews');
const db = mongoose.connect("mongodb://max:reviews7@ds151970.mlab.com:51970/reviews");
module.exports = db;