const express = require('express');
const router = express.Router();
const passport = require('passport')
const jwt = require('jsonwebtoken');

// Database
const User = require('../models/User');

const config = require('../config/database')

// get
router.get('/profile',(req,res)=> {
    return res.json({
        "Username": "Test"
    })
})

// post request
router.post('/register', (req,res)=> {
    return res.json(
        req.body
    )
})


module.exports = router //export the router