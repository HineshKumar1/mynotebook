const mongoose =  require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";

 const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{
      useNewUrlParser: true,
    useUnifiedTopology: true
    })
      .then(console.log("connected to server"))
      .catch((err) => console.log(err));
}
module.exports = connectToMongo; 