import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios"
const app = express();
const port = 3000;
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

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
     const lat=parseFloat(req.query.lat);
     const lng=parseFloat(req.query.lng);
     console.log(lat,lng)
     const radius=req.query.radius
    const bearerToken = "b7caeb5a-c9ce-4268-9ca0-a0fc3684ae3d";

    // try {
    //     const response = await axios.get(`https://atlas.mappls.com/api/places/nearby/json?keywords=cafe&refLocation=${lat},${lng}&radius=${radius}`, {
    //         headers: {
    //             'Authorization': `bearer ${bearerToken}`,
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     res.send(response.data)
    // } catch (error) {
    //     console.log(error);
    // }
  
})



app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
  