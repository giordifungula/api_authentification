const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path')
const cors  = require('cors')

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

// Listen to port
app.listen(port, ()=>{
    console.log(`We are running our server on port ${port}`)
})