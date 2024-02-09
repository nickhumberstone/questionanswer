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
    <KeyboardAvoidingView className="p-5 bg-gray-100 mb-2 shadow-lg shadow-black w-4/5 flex rounded-md">
      <Text className="text-center text-lg font-bold">{todayQuestion}</Text>
      <TextInput
      className="bg-blue-300 m-2 rounded-lg text-center p-5"
      placeholder='Answer here'
      value={answer}
      onChangeText={setAnswer}
      maxLength={140}
      multiline={true}
      />
      <TouchableOpacity onPress={handleSubmit} className="p-2 m-2 bg-blue-200 rounded-lg"><Text className="text-center">Send it!</Text></TouchableOpacity>
      {responseSubmitted && (
        <Text className="text-center">Response sent!</Text>
      )}
    </KeyboardAvoidingView>
      
  )
}

export default QuestionForm