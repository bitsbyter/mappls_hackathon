import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
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
  


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
  