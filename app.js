// Import express
const express = require('express')// Initialize the app
const app = express();// Setup server port


// Import Body parser
const bodyParser = require('body-parser');// Import Mongoose
const mongoose = require('mongoose');// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());// Connect to Mongoose and set connection variable

mongoose.connect('mongodb://localhost/giletjaune', { useNewUrlParser: true});
const db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")





// Import routes
const apiRoutes = require("./routes/api_routes")// Use Api routes in the App
app.use('/api', apiRoutes)

var port = process.env.PORT || 8080;// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running sara world " + port);
});