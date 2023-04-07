const  connectToMongo = require('./db');
const express = require('express');

//Calling Database Connection Function
connectToMongo();
 
const app = express()
const port = 5000

app.use(express.json())

//Avaiable Routes:
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`MyNoteBook Server listening on port http://localhost:${port}`)
})
