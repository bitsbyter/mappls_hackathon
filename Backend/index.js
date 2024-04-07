import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios"
import mongoose from "mongoose";
import { user } from "firebase-functions/v1/auth";
const app = express();
const port = 3000;
const corsOptions = {
  origin: "https://mappls-hackathon-frontend.vercel.app", // Change this to the specific origin of your frontend app
  methods: "GET,POST", // Add other methods as needed
  allowedHeaders: "Content-Type,Authorization, Access-Control-Allow-Origin", // Add other headers as needed
};
app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


async function main() {
  // 7BPYrqJgtItghBcO  dgoel7146
  try {
    await mongoose.connect("mongodb+srv://dgoel7146:7BPYrqJgtItghBcO@mapplsdatabase.qm6jlk7.mongodb.net/?retryWrites=true&w=majority&appName=MapplsDatabase");
    console.log("Connected to MongoDB");
    
    const UserScoreSchema = new mongoose.Schema({
      userEmail: String,
      totalScore: Number,
      Category:{
      NTCBCH: { type: Number, default: 0 },
      NTCLAK: { type: Number, default: 0 },
      NTCWLS: { type: Number, default: 0 },
      NTCFAL: { type: Number, default: 0 },
      NTCHLS: { type: Number, default: 0 },
      NTCISL: { type: Number, default: 0 },
      NTCNPK: { type: Number, default: 0 },
      PLPHIN: { type: Number, default: 0 },
      PLPCHU: { type: Number, default: 0 },
      HISFRT: { type: Number, default: 0 },
      HISMUS: { type: Number, default: 0 },
      HISMON: { type: Number, default: 0 },
      PREHRG: { type: Number, default: 0 },
      NOPHRG: { type: Number, default: 0 },
      FODCON: { type: Number, default: 0 },
      FODIND: { type: Number, default: 0 },
      FODCOF: { type: Number, default: 0 },
      FODNGT: { type: Number, default: 0 },
      FODPUB: { type: Number, default: 0 },
      RCNART: { type: Number, default: 0 },
      RCNCLB: { type: Number, default: 0 },
      RCNPCB: { type: Number, default: 0 },
      RCNTHT: { type: Number, default: 0 },
      RCNAUS: { type: Number, default: 0 },
      RCNCMP: { type: Number, default: 0 },
      RCNCSN: { type: Number, default: 0 },
      RCNGHT: { type: Number, default: 0 },
      EVTDAN: { type: Number, default: 0 },
      EVTFOD: { type: Number, default: 0 },
      EVTCMD: { type: Number, default: 0 },
      EVTMUS: { type: Number, default: 0 },
      EVTTHT: { type: Number, default: 0 }
      }
    });
  
    const UserScore = mongoose.model("UserScore", UserScoreSchema);
  
    app.post("/ScoreBoard", async (req, res) => {
      console.log(req.body);
      const { points, user, category } = req.body;
      console.log(points, user, category);
    
      try {
        const existingUser = await UserScore.findOne({ userEmail: user.email });
    
        if (!existingUser) {
          const newUserScore = new UserScore({
            userEmail: user.email,
            totalScore: points,
            Category: getCategoryWithDefaultValues(category, points)
          });
    
          await newUserScore.save();
        } else {
          // If the user exists, update their total points and category scores
          const updatedScores = { ...existingUser.toObject() };
          updatedScores.totalScore += points;
    
          category.forEach(cat => {
            if (updatedScores.Category.hasOwnProperty(cat)) {
              updatedScores.Category[cat] += points;
            } else {
              updatedScores.Category[cat] = points;
            }
          });
    
          await UserScore.updateOne({ userEmail: user.email }, { $set: updatedScores });
        }
    
        res.status(200).json({ success: true });
      } catch (err) {
        console.error("Error saving user score:", err);
        res.status(500).json({ success: false, error: "Error saving user score" });
      }
    });
    
    
    
app.get("/fetchData",async(req,res)=>{
    try{
      const allUserData=await UserScore.find().select("userEmail totalScore");
      console.log(allUserData)
      res.send(allUserData)
    }catch(error){
      console.log(error)
    }
})
app.get("/userData",async(req,res)=>{
  const email=req.query.email
  console.log(email)
  
  try{
    const particularUserData=await UserScore.find({userEmail:email})
  
    res.send(particularUserData[0])
  }catch(error){
    console.log(error)
  }
})
app.get("/",async(req,res)=>{
  console.log("I have been Called");
     const lat=parseFloat(req.query.lat);
     const choice=req.query.type;
     const lng=parseFloat(req.query.lng);  
     const radius=parseFloat(req.query.radius);
    const bearerToken = "bdf8b2f1-5810-4bc6-8670-54fd77535888";
    try {
        const response = await axios.get(`https://atlas.mappls.com/api/places/nearby/json?keywords=${choice}&refLocation=${lat},${lng}&radius=${radius}`, {
            headers: {
                'Authorization': `bearer ${bearerToken}`,
                'Content-Type': 'application/json'
            }
        });
        res.send(response.data)
    } catch (error) {
        console.log(error);
    }
  
})

app.get("/textSearch",async(req,res)=>{
  const location=req.query.randomLocation;
  console.log(location)
  const baseUrl="https://atlas.mappls.com/api/places/textsearch/json"
  const bearerToken="15f2adc8-03c1-44b0-a4b3-80aa30e75476"
  try{
    const response=await axios.get(`${baseUrl}`,{
      params:{
          query:`${location}`,
          region:"IND"
      },
      headers: {
        'Authorization': `bearer ${bearerToken}`,
        'Content-Type': 'application/json'
    }
    })
    const targetPlace=(response.data.suggestedLocations[0])
    console.log(targetPlace)
    res.send(targetPlace)

}catch(error){
    console.log(error)
}
})
app.get("/testing",(req,res)=>{
  res.send("Hello there test successful")
})



app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });

 } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
main();
  
export default app;