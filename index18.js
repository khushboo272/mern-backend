
import express from 'express'
const app=express();
const PORT=process.argv[2];
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)

})
app.get("/",(req,res)=>{
    res.send(`server running on ${PORT}`)
})