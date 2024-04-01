import axios from "axios"
import { useSelector } from "react-redux"


const askGpt=async()=>{
    const askedPlace=useSelector((store)=>store.askedPlace)
    const askedLocation=askedPlace.Location;
    try{
        const response=await axios.post("https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask",{
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'a68d64b393mshf8d601eea9e5565p12e674jsnb2b42bde54a3',
                'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
              },
              data: {
                query: `Tell me facts about ${askedLocation} in 3 points?`
              }
        })
        console.log(response.data)
    }catch(error){
        console.log(error)
    }
    
}
export default askGpt