import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios"
import mongoose from "mongoose";
import { user } from "firebase-functions/v1/auth";
const app = express();
const port = 3000;
const corsOptions = {
  origin: "http://localhost:5173", // Change this to the specific origin of your frontend app
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
       NTCBCH: Number,
       NTCLAK: Number,
       NTCWLS: Number,
       NTCFAL: Number,
       NTCHLS: Number,
       NTCISL: Number,
       NTCNPK: Number,
       PLPHIN: Number,
       PLPCHU: Number,
       HISFRT: Number,
       HISMUS: Number,
       HISMON: Number,
       PREHRG: Number,
       NOPHRG: Number,
       FODCON: Number,
       FODIND: Number,
       FODCOF: Number,
       FODNGT: Number,
       FODPUB: Number,
       RCNART: Number,
       RCNCLB: Number,
       RCNPCB: Number,
       RCNTHT: Number,
       RCNAUS: Number,
       RCNCMP: Number,
       RCNCSN: Number,
       RCNGHT: Number,
       EVTDAN: Number,
       EVTFOD: Number,
       EVTCMD: Number,
       EVTMUS: Number,
       EVTTHT: Number
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
            ...category.reduce((acc, curr) => ({ ...acc, [curr]: points }), {})
          });
    
          await newUserScore.save();
        } else {
          // If the user exists, update their total points and category scores
          const updatedScores = { ...existingUser.toObject() };
          updatedScores.totalScore += points;
    
          category.forEach(cat => {
            if (updatedScores.hasOwnProperty(cat)) {
              updatedScores[cat] += points;
            } else {
              updatedScores[cat] = points;
            }
          });
    
          await UserScore.updateOne({ userEmail: user.email }, updatedScores);
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

// app.get("/textSearch",async(req,res)=>{
//   const location=req.query.randomLocation;
//   console.log(location)
//   const baseUrl="https://atlas.mappls.com/api/places/textsearch/json"
//   const bearerToken="15f2adc8-03c1-44b0-a4b3-80aa30e75476"
//   try{
//     const response=await axios.get(`${baseUrl}`,{
//       params:{
//           query:`${location}`,
//           region:"IND"
//       },
//       headers: {
//         'Authorization': `bearer ${bearerToken}`,
//         'Content-Type': 'application/json'
//     }
//     })
//     const targetPlace=(response.data.suggestedLocations[0])
//     console.log(targetPlace)
//     res.send(targetPlace)

// }catch(error){
//     console.log(error)
// }
// })
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