const mongoose =  require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/mynotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";
mongoose.set('strictQuery', false);
 const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{
      useNewUrlParser: true,
    useUnifiedTopology: true
    })
      .then(console.log("connected to MongoDB"))
      .catch((err) => console.log(err));
}
module.exports = connectToMongo; 