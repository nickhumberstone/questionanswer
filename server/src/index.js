import express from 'express';
import cors from 'cors';
import { getAnswers } from './database.js';

const app = express();
app.use(cors());
app.use(express.json());

//for displaying all responses
app.use("/", async (req, res) => {
    const answers = await getAnswers()
    res.send(answers);
})

//error responses
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.listen(3030, ()=>{
    console.log("Server started on 3030")
})

const test = getAnswers();
console.log(test);