import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios"
import mongoose from "mongoose";
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
    
  try {
     await mongoose.connect("mongodb+srv://f20220457:@userdatabase.xnpq27g.mongodb.net/?retryWrites=true&w=majority&appName=userDatabase")
     console.log("Connected to MongoDb")
     const UserScoreSchema= new mongoose.Schema({
     userEmail:String,
     totalScore:Number,
     NTCBCH:Number,
     NTCLAK:Number,
     NTCWLS:Number,
     NTCFAL:Number,
     NTCHLS:Number,
     NTCISL:Number,
     NTCNPK:Number,
     })
     const UserScore = mongoose.model("UserScore", UserScoreSchema);
    
    app.post("/ScoreBoard",async(req,res)=>{

    })

  app.post("/Register", async(req,res)=>{
     console.log(" I received Something")
    try{
      const email=req.body["email"]
      const password=req.body['password']
      const firstName=req.body["fName"]
      const lastName=req.body["lName"]
        
        console.log(email,password,firstName,lastName)
        res.send({email,password});
    }catch(err){
  console.log(err)
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