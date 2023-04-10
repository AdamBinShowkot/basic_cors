const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST","PUT"],
}))

app.put('/data',(req,res)=>{
    res.json({
        name:"Asib",
        description:"Nothing"
    })
});

app.listen(3001)