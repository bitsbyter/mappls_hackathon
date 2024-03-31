import { useSelector } from "react-redux";
import Locations from "../../../Locations";
import axios from "axios";
import Taj from '../../../assets/Images/RedFort1.jpg'
import QutubMinar from '../../../assets/Images/QutubMinar1.jpg'
import { useEffect, useState } from "react";


function QuestionImage(){
    return <>
    <div className="flex flex-col col-span-3">
    <img src={QutubMinar} style={{height:"500px",width:"500px"}}></img>
    </div>
      
    </>

}

export default QuestionImage;