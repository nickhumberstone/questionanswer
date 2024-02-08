import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

// import express from 'express'
// express().use(express.json())

// This is a card that appears on the QuestionScreen
const QuestionForm = () => {

    const [answer, setAnswer] = useState("");
    const [responseSubmitted, setResponseSubmitted] = useState(false)
    const userId = 1;
    const todayQuestion = "Whats your main hobby?"

    const handleSubmit = () => {
      fetch('https://humberstone.uk/endpointtest', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: {answer},
          userId: {userId}
        })
      })

      // express().post("/response", async (req, res) => {
      //   const {content} = req.body
      //   const response = await createResponse(content)
      //   res.status(201).send(response)
      // })
      setResponseSubmitted(true)
    }

  return (
    <KeyboardAvoidingView className="bg-red-100 w-10/12 rounded-md p-4 shadow-lg shadow-black">
      <Text className="text-center text-lg font-bold">{todayQuestion}</Text>
      <TextInput
      className="bg-green-200 m-2 rounded-lg text-center p-5"
      placeholder='Answer here'
      value={answer}
      onChangeText={setAnswer}
      maxLength={140}
      multiline={true}
      />
      <TouchableOpacity onPress={handleSubmit} className="p-2 m-2 bg-blue-500 rounded-lg"><Text className="text-center">Send it!</Text></TouchableOpacity>
      {responseSubmitted && (
        <Text className="text-center">Response sent!</Text>
      )}
    </KeyboardAvoidingView>
      
  )
}

export default QuestionForm