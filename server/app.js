import express from 'express';
import cors from 'cors';
import { getAnswers, addAnswer, getAllAnswers, getDailyTenAnswers } from './databaselogic.js';


const app = express();
app.use(cors());
app.use(express.json());


//display daily 10 responses
app.use("/dailyten", async (req, res) => {
    const answers = await getDailyTenAnswers()
   res.send(answers);
})

// for displaying all responses
app.use("/answers", async (req, res) => {
    const answers = await getAnswers()
   res.send(answers);
})

//display all answers
app.use("/allanswers", async (req, res) => {
    const answers = await getAllAnswers()
   res.send(answers);
})

// for creating new response
app.post("/add", async (req, res) => {
    const {user_id, text_content} = req.body
    const output = await addAnswer(user_id, text_content)
    res.status(201).send(output)
    console.log(output) 
})

//error responses
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.listen(3030, ()=>{
    console.log("Server started on 3030. Make sure Docker is running, and localtunnel is exposing port 3030 to questionanswer subdomain")
})

// await addAnswer("100","3","third answer is here")