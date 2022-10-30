const express = require('express')
const mongoose = require ('mongoose')
const User = require('./models/user')
require('dotenv').config();
const db_url = process.env.DB_URL || "mongoose.connect('mongodb://localhost:27017/trashpass')"

const app = express()

mongoose.connect(db_url)
.then(() => {
    console.log('CONNECTION OPEN')
})
.catch(err => {
    console.log('Error:', err)
})

app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/register', async(req,res) => {
    const { community, name, number, email } = req.body
    const user = new User({community, name, number, email})
    await user.save((err) => {
        if (err) console.log(err)
        res.redirect('/register')
      });
})

app.get('/register', (req,res) => {
    res.render('registered')
})

app.listen(3000, () => {
    console.log('Server listening on Port: 3000')
})