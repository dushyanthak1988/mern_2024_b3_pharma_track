const mongoose = require('mongoose');

const connectDB = (url) =>{           
     mongoose.set('strictQuery', true);
      console.log( 'url' + url)
     mongoose.connect(url)               
        .then(() =>console.log("MongoDB connected"))
        .catch((error)=>console.log(error));
}
module.exports = connectDB;

