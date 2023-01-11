const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

const PORT = 5000 || process.env.PORT;


app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/sample',(req,res)=>{
    res.json({text:'Server Data'});
})

app.listen(PORT,()=>{
    console.log('Server starts....');
})