/**
 * Imports of installed packages
 * 
 * Express      - @^4.17.1
 * Mongoose     - @^5.13.2
 * bodyparser   - @^1.19.0
 * cors         - @^2.8.5
 * dotenv       - @^10.0.0
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
//Creating an app from express
const app = express();

//Getting the output as a JSON from the app
//app.use(express.json()); -- Commented on addition of bodyparser
app.use(bodyparser.json());
app.use(cors());

app.get('/', async(req,res) => {
    res.send('Welcome to the Online Shopping Platform!!');
})

/**
 * ROUTE IMPORTED FROM - BACKEND -> ROUTES 
 */

const UIRoutes = require('./routes/UIRoute');


/**
 * USING THE ROUTES ON THE SERVER
 * SPECIFIC NAME FOR EACH ROUTE     
 * 
 *                                          
 *                                         
 *                               
 */
app.use("/uigenerator", UIRoutes);

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

//Connection to mongoose
mongoose.connect(MONGODB_URI || '&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}, (error) => {
    if(error) {
        console.log('Error in connection');
    }
})

//Check if connection is successful
mongoose.connection.once('open', () => {
    console.log('Database Synched!!');
})

//Running on the server
app.listen(PORT,() => {
    console.log(`Server is started and running on ${PORT}`);
});

module.exports = app;

