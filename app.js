require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const uri = "mongodb+srv://AlanSrSouza:<password>@cluster0.5zdpm5y.mongodb.net/?retryWrites=true&w=majority";
const bcrypt = require('bcrypt')
const jwt =  require('jsonwebtoken')

const app = express()

app.get('/', (req,res) =>{
    res.status(200).json({msg: 'Bem vindo a nossa API! '})
})

app.listen(3000)
