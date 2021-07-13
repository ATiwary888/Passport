import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.post('/',(req,res) =>{
   const data = req.body;
    console.log(data);
    res.send('data-recived');
});

const PORT = 5001;
app.listen(PORT,()=>console.log("server running cool!"));