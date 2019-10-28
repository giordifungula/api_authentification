const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path')
const mongoose = require('mongoose');
const cors  = require('cors')

// database object
const config = require('./config/database');

// Mongo Config
mongoose.set('useCreateIndex', true)
// Database
mongoose.connect(config.database, {useNewUrlParser: true})
.then( () => {
    console.log(`Database connected successflly with ${config.database}` )
}).catch(err => {
    console.log(err);
})

// App
const app = express();

// Middleware
app.use(cors())

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Body parser middlware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Port
const port = process.env.PORT || 5000;

// Routes
app.get('/', (req,res)=> {
    return res.json({
        message: "We are in the Main route Whoop Whoop. Authentification app here we go"
    })
});

// Bring in the user routes
const users = require('./routes/users');
app.use('/api/users', users)

// Listen to port
app.listen(port, () =>{
    console.log(`We are running our server on port ${port}`)
})
