import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
    res.json("hi mum");
})

app.listen(3030, ()=>{
    console.log("Server started on 3030")
})