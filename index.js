const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require("body-parser");


//Routers

const user = 'root'
const pass = 'root1234'
const url = `mongodb://${user}:${pass}@ds121105.mlab.com:21105/zacmaster_tasks`


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
  
  
  mongoose.connect(url, { useNewUrlParser: true })
  

  
require('./models/task') //Importo el modelo  
require('./routes/task')(app) //Le paso la instancia del servidor al router














const port = process.env.PORT || 4000
app.listen(port,() => {
    console.log(`Server running on http://localhost:${port}`)
})
