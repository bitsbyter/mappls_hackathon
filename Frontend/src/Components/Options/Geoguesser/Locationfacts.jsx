import React, { useState } from 'react'
import axios from 'axios'

const Locationfacts = () => {

  const [information , setInformation] = useState('')
  
  const location = "Paris";
  const apiKey = "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";
  const apiUrl = "https://api.openai.com/v1/engines/text-davinci-003/completions";
  
  const prompt = `Tell me something interesting about ${location}.`;
  
  axios.post(apiUrl, {
    prompt: prompt,
    max_tokens: 100,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  })
    .then((response) => {
      console.log(response.data.choices[0].text.trim());
      setInformation(response.data.choices[0].text.trim())
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return (
    <div>{information}</div>
    )
  }
  
  export default Locationfacts