// const express = require("express");
import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.listen(4000, ()=>{
    console.log('server started on port:3000');
})