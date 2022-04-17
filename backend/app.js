const express = require('express');
const cors = require("cors");
const userRoutes = require('./route/user.route')
const postRoutes = require('./route/post.route')
const db = require("./model");
var corsOptions = {
  origin: "http://localhost:8080"
};

const app = express();
//connection to mysql


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

db.sequelize.sync().then(() => {
    console.log("Re-sync db.");
  });



app.use('/api/user',userRoutes);
app.use('/api/post',postRoutes);

module.exports = app;
