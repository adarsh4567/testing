const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = 5000 || process.env.PORT;


app.get('/',(req,res)=>{
    res.json({message:'Success'});
})

app.get('/sample',(req,res)=>{
    res.json({text:'Server Data'});
})

app.listen(PORT,()=>{
    console.log('Server starts....');
})