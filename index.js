const express =require('express')

const app = express()


app.get('/',(req,res)=>{
    res.send("srinibash gote maagia")
})

app.listen(5001);
