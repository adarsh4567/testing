const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
app.use(cors())
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